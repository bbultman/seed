module.exports = {
  index: (req, res) => {
    res.set('Cache-Control', 'no-cache')
    res.status(200).json({ status: 'healthy' })
  }
}
