import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiError.js';
import {User} from '../models/user.model.js';
import { uploadOnCloudinary } from '../utils/fileuploader.js';
import { ApiResponse } from '../utils/ApiResponse.js';

const registerUser = asyncHandler(async (req, res) => {
    ///get  user details from  frontend
    /// validate the user details
    ///  check if user already exists
    /// check for image ,for avatar
    /// upload the image to cloudinary
    /// create the user in database
    /// remove the password from the response
    /// cheack if user created successfully
    ///return response to frontend

    const { username, email, fullName, password } = req.body
    console.log("email:", email);

    if (
        [fullName, email, password, username].some((field) => field?.trim() === "")
    ) {
        throw new ApiError("Full name is required", 400)
    }
    const existingUser = User.findOne({
        $or: [{ email }, { username }]
    })

    if (existingUser) {
        throw new ApiError("User already exists", 409)
    }
    const avatarLocalPath = req.files?.avatar[0]?.path;
    const coverImageLocalPath = req.files?.coverImage[0]?.path;

    if (!avatarLocalPath) {
        throw new ApiError("Avatar image is required", 400)
    }
    const avatar = await uploadOnCloudinary(avatarLocalPath);
    const coverImage = await uploadOnCloudinary(coverImageLocalPath);
if (!avatar) {
    throw new ApiError("Failed to upload avatar image", 400)
}
const user = await User.create({
    fullName,
    avatar: avatar.url,
    coverImage: coverImage?.url || "",
    email,
    username: username.toLowerCase(),
    password
})
const createdUser = await user.findById(user._id).select(
    "-password -refreshToken "
)
if (!createdUser) {
    throw new ApiError("Failed to create user", 500)
}
return res.status(201).json(new ApiResponse
    (200, createdUser, "User registered successfully"))
})

export { registerUser }