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
  async store(req, res) {
    const { name, email, phone, category_id } = req.body;
    const contactExists = await ContactsRepository.findByEmail(email);

    if(!name) {
      return res.status(400).json({ error: 'Name is required!' });
    }

    if(contactExists) {
      return res.status(400).json({ error: 'This e-mail is already in use' });
    }

    const contact = await ContactsRepository.create({
      name, email, phone, category_id,
    });

    res.json(contact);
  }

  // Edit a register
  async update(req, res) {
    const { id } = req.params;
    const { name, email, phone, category_id  } = req.body;

    const contactExists = await ContactsRepository.findById(id);
    if(!contactExists) {
      return res.send(404).json({ error: 'User not found.' });
    }

    if(!name) {
      return res.status(404).json({ error: 'Name is required!' })
    }

    const contactByEmail = await ContactsRepository.findByEmail(email);
    if(contactByEmail && contactByEmail.id !== id) {
      return res.status(400).json({ error: 'This e-mail is already in use' });
    }

    const contact = await ContactsRepository.update(id, {
      name, email, phone, category_id
    });oeiq

    res.json(contact);
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
