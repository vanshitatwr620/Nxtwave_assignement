import "./style.css";
import { Link } from 'react-router-dom';

function Login() {
    return (
        <form>
            <div class="form-group text-center my-4 mt-5">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control text-center" width="50" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group text-center my-4 mt-5">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control text-center" id="exampleInputPassword1" placeholder="Password" />
            </div>

            <div class="col-md-12 text-center mt-5">
                <Link to="/Nxtwave_assignement/home">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </Link>
            </div>


        </form>
    );
}

export default Login;