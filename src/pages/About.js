import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container py-5 my-5">
      <div className="row">
        <div className="col-md-6 ">
          <h1 className="text-primary fw-bold mb-4">About Us</h1>
          <p className="lead mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas aliquid alias fuga saepe nobis blanditiis quisquam magnam aut cumque doloremque rerum dolore iusto delectus fugit, tempore pariatur amet officiis, praesentium consequatur, perspiciatis dicta quidem. Doloremque distinctio numquam asperiores beatae architecto quia perferendis cumque laudantium harum? Vitae, illo ullam voluptatum sint exercitationem hic voluptatem, ipsa quo qui distinctio excepturi aspernatur inventore id consectetur quisquam doloribus laborum! Obcaecati optio sapiente magni laboriosam autem magnam voluptate necessitatibus corrupti beatae, vel omnis saepe illo quisquam? Tenetur perferendis quaerat labore eligendi ut blanditiis. Reprehenderit neque repellendus suscipit tempora nihil sint iure veritatis nesciunt quaerat hic.
          </p>
          <Link to="/contact" className="px-3 btn btn-outline-primary">
            Contact Us
          </Link>
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <img
            src="https://img.freepik.com/free-vector/teamwork-concept-landing-page_52683-20165.jpg?w=740&t=st=1668783161~exp=1668783761~hmac=7d5a26d0e45c746e61e5933659e001af0a7591e6562ab2b6615d9d54a7f0b739"
            alt="about"
            width='400px'
            height='400px'
          />
        </div>
      </div>
    </div>
  );
};

export default About;
