class ContactController {
  index(req, res) {
    //list all registers
    res.send('Send from contact controller');
  }

  show() {
    // Get a register
  }

  store() {
    // Create new register
  }

  update() {
    // Edit a register
  }

  delete() {
    // Delete a register
  }
}

// Singleton
module.exports = new ContactController();