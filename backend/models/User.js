const userSchema = new mongoose.Schema({   // <-- this part is the "schema" (defines the shape/fields)
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String },
  password: { type: String, required: true }
});

module.exports = mongoose.model('User', userSchema);   // <-- this turns the schema into a usable "model"