import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Stephen Ochieng</h2>
            <h4 style={{color: 'grey'}}>Software Engineer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>I am a FullStack Software Engineer who believes that with many problems in the world, there are many solutions as well. I believe in implementing great ideas that can change our world using codes. Ever since I displayed "HELLO WORLD" on a screen, I have concluded there is no puzzle that is impossible to solve in programming.</p>

            <p>I love coming across challenges in programming as they give me directions on what to learn; this attitude has helped grow in terms of my programming skill-set. I am passionate about implementing systems that solve some of the world's biggest problems, like corruption and environment conservation.</p>
            
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Nairobi Kenya, 9456</p>
            <h5>Phone</h5>
            <p>(254) 718-697-987</p>
            <h5>Email</h5>
            <p>stephenojwang1040@gmail.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2014}
              endYear={2017}
              schoolName="Kabarak University"
              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
               />

               <Education
                 startYear={2019}
                 endYear={2020}
                 schoolName="Openclassrooms"
                 schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2015}
              endYear={2020}
              jobName="Freelance Developer"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />

              <Experience
                startYear={2017}
                endYear={2018}
                jobName="Software Engineer at Netmor"
                jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                />

                <Experience
                startYear={2017}
                endYear={2018}
                jobName="Software Engineer at Netmor"
                jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                />

              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={93}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={97}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={87}
                    />
                    <Skills
                      skill="React"
                      progress={89}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
