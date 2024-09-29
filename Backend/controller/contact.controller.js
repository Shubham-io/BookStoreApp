import Contact from "../model/contact.model.js";

export const contact = async (req, res) => {
  try {
    const { fullname, email, message } = req.body;
    const contact = await Contact.findOne({ email });
    if (contact) {
      return res
        .status(400)
        .json({ message: "Your response has already submitted" });
    }
    const createdMessage = new Contact({
      fullname: fullname,
      email: email,
      message: message,
    });

    await createdMessage.save();
    res.status(201).json({
      message: "Your feedback has been sent",
      user: {
        _id: createdMessage._id,
        fullname: createdMessage.fullname,
        email: createdMessage.email,
        message: createdMessage.message,
      },
    });
  } catch (error) {
    console.log("Error: ", error.message);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};
