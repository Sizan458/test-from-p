import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const Register = () => {
  const{googleSignIn,gitHubSignIn,faceBookSignIn}=useContext(AuthContext)
  const handleGoogle=()=>{
    googleSignIn()
    .then(result=>{
      console.log(result)
    })
    .then(error=>{console.error(error)})
  }
  const handleGitHub=()=>{
    gitHubSignIn()
    .then(result=>{
      console.log(result)
    })
    .then(error=>{console.error(error)})
  }
  const handleFaceBook=()=>{
   faceBookSignIn()
    .then(result=>{
      console.log(result)
    })
    .then(error=>{console.error(error)})
  }

  const handleRegister= e => {
    e.preventDefault();
    const name= e.target.name.value
    const photo= e.target.img.value
    const email =e.target.email.value
    const password = e.target.password.value
    console.log(name, photo, email, password)
  }
    return (
      

        <div>
            <from onSubmit={handleRegister}>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image Url</span>
          </label>
          <input type="text" placeholder="Image Url" name="img" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <div>
        <button className="btn btn-primary" onClick={handleGoogle}>Google Login </button>
        <button className="btn btn-primary" onClick={handleGitHub}>Github Login </button>
        <button className="btn btn-primary" onClick={handleFaceBook}>Facebook Login </button>
      </div>
    </div>
  </div>
</div>
            </from>
        </div>
    );
};

export default Register;