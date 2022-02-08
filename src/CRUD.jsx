import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function Fetching() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    function fetchget() {
      axios
        .get(
           "http://api.countrylayer.com/v2/all?access_key=eca4cc69a37b4723945a5cf0a7f4747a"
        )
        .then((res) => {
          // console.log(res)
          // console.log(res.data)
          setPost(res.data);
        })
        .catch((er) => {
          console.log("error");
        });
    }
    fetchget();
  }, []);

  console.log(post);

  return (
    <div>
      <h2>FETCHING DATA USING AXIOS</h2>
      <table className="body1" border="4">
        <thead>
          <tr>
            <td>Country Code</td>
            <td>Name</td>
            <td>Capital</td>
            <td>Region</td>
          </tr>
        </thead>
        <tbody>
          {post.map((posts) => (
            <tr key={posts.alpha2Code}>
              <td>{posts.alpha3Code}</td>
              <td>{posts.name}</td>
              <td>{posts.capital}</td>
              <td>{posts.region}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Fetching;
