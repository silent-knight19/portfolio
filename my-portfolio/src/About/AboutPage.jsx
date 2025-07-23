import React from 'react'
import '../styles/AboutPage.css'

function AboutPage() {
    return (
        <div className='about'>
            <div className='about'>
                <p>Hey, I'm Sachin — a Full Stack Web Developer with a strong command over the MERN stack, blending technical craftsmanship with an engineer's mindset. My journey into tech wasn't just about writing code — it was about understanding how everything works, from electrons in circuits to requests in the cloud.</p>
                
                <p>I believe great software isn't just built — it's architected. That's why I don't stop at how things work; I constantly ask why they work the way they do. I enjoy diving deep — whether that's optimizing backend performance, untangling frontend state, or exploring the fundamentals of distributed systems.</p>
                
                <p>Right now, I'm building real-world projects like a real-time collaborative editor, contributing to open source, and actively learning system design, GitHub workflows, TypeScript, and offline-first architecture.</p>
                
                <p>I thrive when challenged. Whether it's performance bottlenecks, scaling strategies, or reviewing code for maintainability — that's my playground. I'm not just here to push code. I'm here to push boundaries.</p>
                
                <p>Let's connect if you're looking for someone who blends hands-on skill with a hunger to grow, questions everything, and builds like a future CTO.</p>
            </div>

            <div className='about'>
                <h3 style={{fontSize:"2rem"}}>My Development Approach</h3>
                <p>I write code with the next developer in mind — whether that's a teammate or future me. I'm still learning the balance between over-engineering and building for scale, but I've found that starting simple and refactoring when needed usually works better than trying to predict every future requirement.</p>
                
                <p>When I encounter bugs or performance issues, I don't just fix the symptom — I dig into why it happened. This curiosity has taught me more about how systems work than any tutorial ever could.</p>
            </div>

            <div className='about'>
                <h3 style={{fontSize:"2rem"}}>Recent Learning Experiences</h3>
                <p>While building my collaborative editor project, I ran into my first real concurrency challenge when multiple users were editing simultaneously. I spent days researching operational transforms and conflict resolution before settling on a simpler approach that works for my current scope. It was humbling but taught me the value of incremental complexity.</p>
                
                <p>I recently refactored a personal project from prop drilling hell to using Context API. The improvement in code readability was immediate, and it made me realize how much I'd been fighting React instead of working with it.</p>
                
                <p>Contributing to open source has been eye-opening. My first PR was just fixing a typo in documentation, but seeing how maintainers review code and discuss architectural decisions has elevated my own standards.</p>
            </div>

            <div className='about'>
                <h3 style={{fontSize:"2rem"}}>What I'm Learning Now</h3>
                <p>System design fascinates me, but I'm honest about being a beginner. I'm working through case studies, understanding how to think about trade-offs between consistency and availability, and learning why certain patterns exist before trying to apply them.</p>
                
                <p>TypeScript is becoming second nature, though I still occasionally fight with the compiler when trying to type complex React patterns. The safety it provides is worth the learning curve.</p>
                
                <p>I'm exploring how to build applications that work offline, starting with service workers and local storage strategies. It's more complex than I initially thought, but the user experience benefits are clear.</p>
            </div>

            <div className='about'>
                <h3 style={{fontSize:"2rem"}}>How I Work</h3>
                <p>I believe in writing code that explains itself, but I'm not dogmatic about it. Sometimes a well-placed comment is better than trying to make the code "self-documenting" at the expense of readability.</p>
                
                <p>I test the critical paths of my applications, but I'm still learning where to draw the line between useful tests and testing for the sake of coverage metrics.</p>
                
                <p>When I review code (my own or others'), I look for clarity first, optimization second. Readable code that performs adequately beats clever code that nobody understands.</p>
            </div>

            <div className='about'>
                <h3 style={{fontSize:"2rem"}}>Looking Forward</h3>
                <p>I want to build systems that can grow without breaking. I'm working on understanding the principles behind good architecture rather than just copying patterns I've seen elsewhere.</p>
                
                <p>My goal is to become the kind of developer who can see the bigger picture while still caring about the details — someone who can balance technical excellence with practical delivery.</p>
                
                <p>I'm building my portfolio not just to showcase what I can do now, but to document my growth as I continue learning and tackling more complex challenges.</p>
            </div>
        </div>
    )
}

export default AboutPage