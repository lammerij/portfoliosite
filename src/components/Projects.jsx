import React from "react";
import "./Projects.css";
import { Link } from "react-scroll";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="container">
        <h2 className="text-white">
          <u>PROJECTS</u>
        </h2>
        <Link to="hero">
          <h4 className="text-white">Back To Top</h4>
        </Link>
        <span className="line"></span>
        <div className="content">
          <div className="card">
            <a
              href="https://github.com/lammerij/tennis_club_app"
              target="blank"
            >
              <img
                class="image"
                src="https://user-images.githubusercontent.com/56732905/195426805-fa357df8-5267-4f5c-ba93-b59f6a602a4d.png"
                alt="github"
              />
            </a>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2 text-center">
                Tennis Club Reviews
              </div>
              <p class="text-gray-700 text-base">
                An app that allows you to create reviews for tennis clubs you've
                visited or are a member of.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2 text-center">
              <span class="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-white-700 mr-2 mb-2">
                React
              </span>
              <span class="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Ruby on Rails
              </span>
              <span class="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                HTML
              </span>
              <span class="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Styles
              </span>
            </div>
          </div>
          <div className="card">
            <a
              href="https://github.com/lammerij/phase-5-project"
              target="blank"
              alt="github"
            >
              <img class="w-full" src="/pic.png" alt="goFundit" />
            </a>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2 text-center">goFundit</div>
              <p class="text-gray-700 text-base">
                goFundit is a crowd funding app that allows people to host
                drives to raise money for a cause/causes they want to support.
                Whether its people affected by storms, fires, or medical expense
                needs, its an opportunity for people in the community or accross
                the globe to come together and help one another.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2 text-center">
              <span class="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-white-700 mr-2 mb-2">
                React
              </span>
              <span class="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Rails
              </span>
              <span class="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                HTML
              </span>
              <span class="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Styles
              </span>
              <span class="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Bootstrap
              </span>
            </div>
          </div>
          <div className="card">
            <a
              href="https://github.com/lammerij/portfoliosite"
              target="blank"
              alt="github"
            >
              <img
                class="w-full"
                src="/Screen Shot 2023-03-20 at 3.48.07 PM.png"
                alt="Portfolio"
              />
            </a>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2 text-center">Portfolio</div>
              <p class="text-gray-700 text-base">
                My first portfolio site to launch my new career in Software
                Engineering.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2 text-center">
              <span class="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-white-700 mr-2 mb-2">
                React
              </span>
              <span class="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                TailWindCSS
              </span>
              <span class="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                React Icons
              </span>
        
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
