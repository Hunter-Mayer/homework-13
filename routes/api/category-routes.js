const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const allCategories = await Category.findAll({
      include: [Product]
    })
    res.json(allCategories)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.get('/:id', async (req, res) => {
  try {
    const singleCategory = await Category.findOne({
      where: {
        id: req.params.id
      },
      include: [Product]
    })
    res.json(singleCategory)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.post('/', async (req, res) => {
  try {
    const newCategory = await Category.create(req.body)
    res.json(newCategory)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updatedCategory = await Category.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    res.json(updatedCategory)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedCategory = await Category.destroy({
      where: {
        id: req.params.id
      }
    })
    res.json(deletedCategory)
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;