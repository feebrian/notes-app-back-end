/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  // membuat user baru
  pgm.sql(
    "INSERT INTO users VALUES('old_notes', 'old_notes', 'old_notes', 'old_notes')"
  );

  // mengubah nilai owner pada note yang owner-nya bernilai null
  pgm.sql("UPDATE notes SET owner = 'old_notes' WHERE owner is NULL");

  // memberikan constraint foreign key pada owner terhadap kolom id dari tabel users
  pgm.addConstraint(
    "notes",
    "fk_notes.owner_users.id",
    "FOREIGN KEY(owner) REFERENCES users(id) ON DELETE CASCADE"
  );
};

exports.down = (pgm) => {};
