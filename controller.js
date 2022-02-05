exampleFn = async (req, res) => {
  try {
    const {  } = req.example;

    res.status(200).json({
      status: true,
      message: '',
      // data        
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message || error,
      data: null
    });
  }
}