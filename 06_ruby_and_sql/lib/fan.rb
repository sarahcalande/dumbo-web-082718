class Fan
  # CRUD  actions
  # CREATE - INSERT INTO
  # READ - SELECT
  # UPDATE - UPDATE SET
  # DELETE  - DELETE

  def self.create_table
    sql = "CREATE TABLE fans (id INTEGER PRIMARY KEY, name TEXT, artist_id INTEGER);"

    DB[:conn].execute(sql)
  end

  # CREATE
  # insert into the database
  def self.insert(name, artist_id)
    # Fan.insert("Prince", 276)

    sql = <<-SQL
      INSERT INTO fans (name, artist_id) VALUES (?, ?);
    SQL

    DB[:conn].execute(sql, name, artist_id)
  end

  # READING
  def self.find(id)
    sql = <<-SQL
      SELECT * FROM fans WHERE id = ?
    SQL

    DB[:conn].execute(sql, id)
  end


  # UPDATE
  def self.update(id, artist_id)
    sql = <<-SQL
      UPDATE fans SET artist_id = ? WHERE id = ?
    SQL

    DB[:conn].execute(sql, artist_id, id)
    # Fan.udpate()
  end

  # DELETE
  def self.delete(id)
    sql = <<-SQL
      DELETE FROM fans WHERE id = ?
    SQL

    DB[:conn].execute(sql, id)
  end






  # [[]]
  # [{}]

end
