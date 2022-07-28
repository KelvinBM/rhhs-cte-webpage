import React from 'react';
import '../../css/skills-required.css';

function SkillsRequired() {
    return(
        <div>
            <h1 id= "skills-top-header">
                Introduction to Soft
                skills and Technical skills
            </h1>


            <h4 id="softSkills">Soft Skills</h4>

            <p id="paragraphs-1">
                Soft skills are the ability to work effectively in your work environment.
                Soft skills can be put into categories which are interpersonal skills,
                personal qualities, and knowledge. they are a personal attribute that
                support situational awareness and enhances an individual's ability to get
                a job done.
            </p>
            
            <p id="paragraphs-2">
                Soft skills are arguably more important than technical 
                skills, they are what make you and your colleagues feel 
                good at your workplace, and it makes it a safe and active 
                environment. 
            </p>
            <p id= "paragraphs-1">
                Although tenchnical and soft skills can be learned/taught, soft skills are much more 
                important. If you're the best at your specialized knowledge but
                can't work as a team, communicate, or manage your time, then you wouldn't meet the
                standards the job is asking for you to meet.
            </p>
            <p id= "paragraphs-2">
                without possession of any soft skills qualities
                you won't be able to help others, receive help, and you may becomes less responsible, and overall not 
                perform well at doing your job.
            </p>
            <p id="paragraphs-1">
                Communication involves
                speaking clearly, listening, and observing.
            </p>
            <p id="paragraphs-2">
                Teamwork is very important in a work environment
                because it allows us to share our ideas together and to motivate each
                other to be able to produce a great product.
            </p>
            <p id="paragraphs-1">
                Time management is a very
                important soft skill because it allows us to be well organized, reliable,
                and productive to be able to create a high quality product.

            </p>
            <h3 id= "soft-skill-cards-header">Examples of Soft Skills</h3>
            <div className="soft-skill-cards" >
                <div className="card">
                    <img
                        src="https://champsoftblog.com/wp-content/uploads/2020/08/time_management_hero-1-970x679-1.png"
                        className="card-img-top"
                        alt="time management"
                    />
                    <div className="card-body">
                        <p className="card-text"></p>
                        <div className="shadow p-3 mb-5 bg-body rounded">
                            <b>Time management - </b>The process of organizing and planning how
                            to divide your time between different activities.
                        </div>
                    </div>
                </div>
            </div>

            <div className="soft-skill-cards" >
            <div className="card">
                <img
                    src="https://bevynkhanal.files.wordpress.com/2019/10/active-listening.jpg"
                    className="card-img-top"
                    alt="Active listening"
                />
                <div className="card-zbody">
                    <p className="card-text">
                        <font size="2">
                        <div className="shadow p-3 mb-5 bg-body rounded">
                            <b>Active Listening - </b>Rather than giving someone a fraction
                            of your attention, active listening is making a conscious effort
                            to hear, understand, and retain information that's being relayed
                            to you. It involves more than listening to the words they say.
                        </div>
                        </font>
                    </p>
                </div>
            </div>
            <div className="soft-skill-cards">
                <div className="card">
                        <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMU9_-3LhUGHKNCDe_JYwmKY_wXqMrE9kb7A&usqp=CAU"
                        className="card-img-top"
                        alt="Dependability"
                        />
                    <div className="card-body">
                        <p className="card-text"></p>
                        <div className="shadow p-3 mb-5 bg-body rounded">
                            <b>Dependability - </b> you do what you say you will, when you say
                            you will. You can be trusted to complete any task, and you will do
                            it well. A dependable person builds trust by holding him/herself
                            accountable, and if they lead others, holding their team members
                            accountable as well.
                        </div>
                    </div>
                </div>
            </div>
            </div>

            <div className="soft-skill-cards">
            <div className="card">
                <img
                    src="https://i.ytimg.com/vi/t8MP731UJvE/maxresdefault.jpg"
                    className="card-img-top"
                    alt="Critical Thinking"
                />
                <div className="card-body">
                    <p className="card-text"></p>
                    <div className="shadow p-3 mb-5 bg-body rounded" id="critical-thinking">
                        <b>Critical Thinking - </b>Using creativity and foresight to achieve
                        tasks and reach goals in the most efficient ways. Mastering critical
                        thinking often requires a slowed-down pace, where an employee
                        considers all parties involved and all possible outcomes before
                        making a decision.
                    </div>
                </div>
            </div>
            </div>
            <div className="soft-skill-cards">
                <div className="card">
                    <img
                        src="https://blog.vantagecircle.com/content/images/2019/04/team-building-activities.png"
                        className="card-img-top"
                        alt="Teamwork"
                    />
                    <div className="card-body">
                        <p className="card-text"></p>
                        <div className="shadow p-3 mb-5 bg-body rounded" id="teamwork">
                            <b>Teamwork - </b>involves many other interpersonal skills like
                            communication, active listening, flexibility and responsibility.
                            Those who are good team players are often given important tasks in
                            the workplace and may be seen as good candidates for promotions.
                        </div>
                    </div>
                </div>
            </div>

            <div className="soft-skill-cards">
                <div className="card">
                    <img
                        src="https://cdn.glitch.global/46db144e-f9f6-412f-a38c-c8931e7c7c5e/9b06cc97-7fa4-4d37-b8ea-9d46d58acf9b.image.png?v=1657813692137"
                        className="card-img-top"
                        alt="Motivation"
                    />
                    <div className="card-body">
                        <p className="card-text"></p>
                        <div className="shadow p-3 mb-5 bg-body rounded">
                            <b>Motivation - </b>is what causes you to act, whether it is getting
                            a glass of water to reduce thirst or reading a book to gain
                            knowledge. Motivation involves the biological, emotional, social,
                            and cognitive forces that activate behavior.
                        </div>
                    </div>
                </div>
            </div>

            <img
                id="hardskill"
                className="technicalskillsimg"
                src="https://cdn.glitch.global/46db144e-f9f6-412f-a38c-c8931e7c7c5e/download.png?1657810713484"
                alt="technical Skills"
            />

            <div className="soft-skill-cards">
                <div className="card">
                        <img
                        src="https://www.insperity.com/wp-content/uploads/improve_accountability_1200x630-2.png"
                        className="card-img-top"
                        alt="Dependability"
                        />
                    <div className="card-body">
                        <p className="card-text"></p>
                        <div className="shadow p-3 mb-5 bg-body rounded" >
                            <font size="3">
                                <b>Personal Accountability - </b> To acknowledge your mistakes, accept 
                                responsibility for them and to figure out how to fix them.
                            </font>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SkillsRequired;