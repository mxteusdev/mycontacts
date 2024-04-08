const ContactsRepository =  require('../repositories/ContactsRepository');

class ContactController {

  //list all registers
  async index(req, res) {
    const contacts = await ContactsRepository.findAll();
    res.json(contacts);
  }

  // Get a register
  async show(req, res) {
    const { id } = req.params;
    const contact = await ContactsRepository.findById(id);

    if(!contact) {
      // 404 > Not Found
      return res.status(404).json({ error: 'User not found'});
    };

   res.json(contact);
  }

  // Create new register
  store() {
  }

  // Edit a register
  update() {
  }

  // Delete a register
  async delete(req, res) {
    const { id } = req.params;
    const contact = await ContactsRepository.findById(id);

    if(!contact) {
      // 404 > Not Found
      return res.status(404).json({ error: 'User not found'});
    };

    await ContactsRepository.delete(id);
    // 204 : No Content
    res.sendStatus(204);
  }
}

// Singleton
module.exports = new ContactController();
