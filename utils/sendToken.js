export const sendToken=(res,user,statusCode,message)=>{

const token=user.getJWTToken()

const options={
    httpOnly:true,
    maxAge:process.env.JWT_COOKIE_EXPIRE*24*60*60*1000,
    sameSite:process.env.NODE_ENV ==="Development"?"lax": "none",
    secure:process.env.NODE_ENV ==="Development"? false:true
}


const userData = {
    _id: user._id,
    name: user.name,
    email: user.email,
    avatar: user.avatar,
    tasks: user.tasks,
    verified: user.verified,
  };

res.status(statusCode).cookie("token",token,options).json({success:true,message,user:userData})

}