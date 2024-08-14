import { PrismaClient } from "@prisma/client";
import { UserDTO } from "../dto/CreateAuthDTO";
import { UserSchema } from "../validators/user";
import { v2 as cloudinary } from "cloudinary";
import { string } from "joi";

const prisma = new PrismaClient();

// async function followedUser(user : UserDTO) {
//     try {
//         const users = await prisma.user.findMany();

//         // const validate =  UserSchema.validate(user)
//         // if(validate.error) throw new String(validate.error.message)
//         const followeds = await prisma.follow.findMany({
//             where: {
//                 followerId : user.id
//             }
//         })

//         const mappedUsers = followeds.map(followed => {
//             return users.map(user => {
//                 if(user.id === followed.followedId)
//                 return {
//                       ...user,
//                       isFollowed : true
//                 }
//                 return {
//                     ...user,
//                     isFollowed : false
//                 }
//             })

//         })[0]

//         return mappedUsers;

//     } catch (error) {
//         throw new String(error)
//     }
// }

async function find(search: string) {
  try {
    return await prisma.user.findMany({
      include: {
        followeds: {
          select: {
            follower: {
              select: {
                id: true,
                username: true,
                photoProfile: true,
                fullName: true,
              },
            },
          },
        },
        followers: {
          select: {
            followed: {
              select: {
                id: true,
                username: true,
                photoProfile: true,
                fullName: true,
              },
            },
          },
        },
      },
      where: {
        username: {
          contains: search,
          mode: "insensitive",
        },
      },
    });
    // const totalFollowings = user.map(user => user.followers.length);
    // const totalFollewers = user.map(user => user.followers.length)
    // return {user}
  } catch (error) {
    throw new Error(error.message || "Failed to retrieve users");
  }
}

// async function follows (email : string) {
//     try {
//         return await prisma.user.findMany({
//             where : {
//                 email
//             },
//             include : {
//                 followeds : true,
//                 followers : true
//             }
//         })
//     } catch (error) {
//         throw new Error(error.message || 'Failed to retrieve users')
//     }
// }

async function findOne(id: number) {
  try {
    const user = await prisma.user.findFirst({
      where: {
        id,
      },
      include: {
        followeds: {
          select: {
            follower: {
              select: {
                id: true,
                fullName: true,
                email: true,
                photoProfile: true,
                username: true,
              },
            },
          },
        },
        followers: {
          select: {
            followed: {
              select: {
                id: true,
                fullName: true,
                email: true,
                photoProfile: true,
              },
            },
          },
        },
      },
    });
    const totalFollowings = user.followers.length;
    const totalFollowers = user.followeds.length;
    // console.log('length followed user', user.followers.length)
    // console.log('length follower user', user.followeds.length)
    // user.followers.map(item => {
    //     console.log(item.followedId)
    // })
    return { ...user, totalFollowers, totalFollowings };
  } catch (error) {
    throw new Error(error.message || "Failed to retrieve users");
  }
}

async function update(dto: UserDTO, email: string) {
  try {
    const validate = UserSchema.validate(dto);
    if (validate.error) throw new Error(validate.error.message);
    const users = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });

    const upload = await cloudinary.uploader.upload(dto.photoProfile, {
      upload_preset: "imagecircle",
    });
    const updateUser = await prisma.user.update({
      where: { email },
      data: {
        ...dto,
        photoProfile: upload.secure_url,
      },
    });

    return updateUser;
  } catch (error) {
    throw new Error(error.message);
  }
}
export default { find, update, findOne };
