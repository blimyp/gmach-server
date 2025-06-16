const users = [
    { id: 1, name: 'אבי' },
    { id: 2, name: 'דנה' },
  ];
  
  exports.getAllOrders = (req, res) => {
    res.json(users);
  };
  
  exports.getOrderById = (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
  
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  };
  