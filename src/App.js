import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <div class="column-layout">
        <div class="main-column">
          <h2>Why are Git and GitHub so important?</h2>
          <p>If you are learning to code, chances are your most important goal is to eventually get a job as a software developer.
        In that case, the answer is very simple:</p>
          <p>Learning Git and GitHub is incredibly important because 99% of the companies that can hire you will use Git and
            GitHub. Therefore, learning how to work with Git and GitHub make you more hirable and help you differentiate yourself
        from more junior developers.</p>
          <p>What makes senior developers senior is not that they know the syntax of a given language better, but that they have
        experience working with large and complex projects with real users and business goals.</p>
        </div>
        <div class="sidebar-one">
          <h3>How to master Git and Github with 3 simple rules</h3>
          <p>One of the things we ask our students to do is to follow the three rules you will find below in order to become
        professional Git and Github users. </p>
        </div>
        <div class="sidebar-two">
          <h3>Wrapping up</h3>
          <p>If you are still confused, just start slow and keep the three rules in mind. Don’t try to think about “How” to do
            things yet and focus on “What” to do and “Why” it’s important for now.
      </p>
        </div>

      </div>
      <div class="call-out-container">
        <div class="call-out">
          <h4>Feather 1</h4>
          <p>Rule #1: Create a Git repository for every new project</p>
        </div>
        <div class="call-out">
          <h4>Feather 2</h4>
          <p>Rule #2: Create a new branch for every new feature</p>
        </div>
        <div class="call-out">
          <h4>Feather 3</h4>
          <p>Rule #3: Use Pull Requests to merge code to Master</p>
        </div>
      </div>
      <div class="fixed-size-container">
        <p class="fixed-size">1 2 3 4 5</p>
      </div>
      <div class="banner">
        <div class="centre-me">Centre Me Plz</div>
      </div>
      <div class="equal-height-container">
        <div class="first">
          <p>The repository design pattern allows you to use objects without having to know how these objects are persisted.
        Essentially it is an abstraction of the data layer.</p>
          <p>The business logic relies on the repository to retrieve the correct data.</p>
          <p>A misconception that I see a lot regarding to this pattern is that repositories are being implemented in such a
        way to create or update records. </p>
        </div>
        <div class="second">
          <div class="second-a">A</div>
          <div class="second-b">B</div>
        </div>
      </div>


    </div>
  );
}

export default App;
