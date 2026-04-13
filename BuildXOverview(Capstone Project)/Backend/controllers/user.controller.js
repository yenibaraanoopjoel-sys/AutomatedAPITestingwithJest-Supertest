const User = require("../models/user.model");

// GET USER PROFILE
exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE USER PROFILE
exports.updateUserProfile = async (req, res) => {
  try {
    const { name, bio, skillsKnown, skillsToLearn, profilePicture, githubLinked } = req.body;
    
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { name, bio, skillsKnown, skillsToLearn, profilePicture, githubLinked },
      { new: true }
    ).select("-password");

    res.json({ message: "Profile updated successfully", user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET SUGGESTED COLLABORATORS (Skill Swap Match)
exports.getSuggestedCollaborators = async (req, res) => {
  try {
    const currentUser = await User.findById(req.user.id);
    if (!currentUser) return res.status(404).json({ message: "User not found" });

    // Find users who know what current user wants to learn, OR who want to learn what current user knows
    const suggestedUsers = await User.find({
      _id: { $ne: req.user.id },
      $or: [
        { skillsKnown: { $in: currentUser.skillsToLearn } },
        { skillsToLearn: { $in: currentUser.skillsKnown } }
      ]
    }).select("name email skillsKnown skillsToLearn bio profilePicture");

    res.json(suggestedUsers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
