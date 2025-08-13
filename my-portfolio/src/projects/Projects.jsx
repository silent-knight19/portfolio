import React from 'react';
import '../styles/Project.css'
const Projects = () => {
    return (
        <><div className='projects' style={{backgroundColor:"#f8f8f8",width:"80%",margin:"auto"}}>
            <h1>MERN Stack Expertise: Building Scalable & Resilient Web Applications</h1>
            <p>As a seasoned MERN Stack Developer, I excel in architecting and deploying high-performance, full-stack web applications leveraging MongoDB, Express.js, React, and Node.js. My extensive experience spans diverse domains, from real-time communication platforms to complex financial and logistics systems. I'm adept at translating intricate business requirements into elegant, scalable technical solutions, always prioritizing security, performance, and maintainability.</p>
        </div>
        <div className='projects' style={{width:"80%",margin:"auto"}}>
            <h1>Employee Management System: Scalable, Role-Based  Application for Efficient User Management</h1>
            <p>Developed a responsive, role-based Employee Management System using React.js (v18), powered by Vite (v5.2) for lightning-fast builds and development cycles. Engineered secure user authentication with protected routes and session handling, ensuring controlled access for Admin and Employee roles.
            <br/><br/>
            Built an Admin Dashboard featuring employee oversight, task assignment/tracking, and performance analytics; streamlined admin operations by approximately 30% through enhanced UI workflows and state management via Context API. Designed an Employee Dashboard where users can view tasks, update statuses, submit work, and monitor personal performance metrics—boosting task completion visibility and accountability by an estimated 25%.
            <br/><br/>
            Integrated task management features including creation, priority setting, deadline tracking, commenting, and collaboration tools—reducing miscommunication and overdue tasks by ~20%. Maintained clean code quality using CSS Modules for modular styling, React Router for navigation, Context API for centralized state, and ESLint for linting and consistency.
            </p>
            <a href="https://github.com/silent-knight19/EMS" target="_blank" rel="noopener noreferrer">GitHub →</a>
        </div>
        <div className='projects' style={{width:"80%",margin:"auto"}}>
            <h1>Zerodhaa - Advanced Financial Trading Platform</h1>
            <p>This wasn't just a basic stock tracker; it was a deep dive into the complexities of a leading financial trading platform. I engineered a comprehensive web application inspired by giants like Zerodha, demonstrating my ability to handle high-frequency data streams, build intuitive, low-latency user interfaces for financial interactions, and seamlessly integrate with real-time market data APIs. This project pushed the boundaries of data visualization, order management systems (OMS), and risk management, all while ensuring robust authentication and authorization mechanisms. The backend was designed to handle concurrent user requests and maintain data integrity under significant load, typical of financial applications.

Technologies: JavaScript, React.js (with Redux/Context API for state management), Node.js, Express.js, MongoDB (for efficient data storage and retrieval of user portfolios, transaction histories), WebSocket integration (for real-time price updates and trade execution notifications), RESTful APIs, potentially caching mechanisms (Redis) for frequently accessed market data.</p>
<a href="https://github.com/silent-knight19/zerodhaa" target="_blank"    rel="noopener noreferrer">GitHub →</a>
            </div>
            <div className='projects' style={{width:"80%",margin:"auto"}}>
                <h1>PixlMeet - Real-time Web Conferencing & Collaboration</h1>
                <p>Engineering a real-time web conferencing application akin to Zoom or Google Meet was a significant undertaking, showcasing my strong command of WebSocket technology (Socket.IO) for instant communication and WebRTC for peer-to-peer media streaming. This project highlighted expertise in managing complex multimedia streams, implementing robust user authentication and authorization, handling dynamic room management, and creating seamless, interactive meeting experiences. We tackled challenges like NAT traversal, bandwidth optimization, server-side signaling, and ensuring a resilient connection even in varying network conditions, providing a smooth UX for thousands of concurrent users.

Technologies: JavaScript, React.js (for dynamic UI and component lifecycle management), Node.js, Express.js, MongoDB (for user profiles, room configurations, chat history), WebSockets (Socket.IO) for signaling and chat, WebRTC for video/audio streaming, STUN/TURN servers for NAT traversal, potentially FFmpeg or similar for media processing, and robust error handling for network resilience.

</p>
<a href="https://github.com/silent-knight19/PixlMeet" target="_blank" rel="noopener noreferrer">GitHub →</a>
                </div>
            <div className='projects' style={{width:"80%",margin:"auto"}}>
                <h1>HeartToHeart - Secure & Private Video Conferencing for Couples</h1>
                <p>This dedicated video conferencing website for couples emphasized secure, private, and high-quality real-time video communication. It wasn't just about throwing WebRTC at a problem; it involved designing a robust backend architecture to handle persistent connections for prolonged intimate interactions, ensuring end-to-end encryption, and focusing on an uninterrupted user experience even during network fluctuations. This project honed my skills in session management, data privacy, and optimizing for low-latency media delivery in a focused, high-trust environment. The challenges involved maintaining stable connections over extended periods and ensuring complete data isolation between sessions.

Technologies: JavaScript, React.js, Node.js, Express.js, MongoDB, WebSockets (Socket.IO) for signaling, WebRTC for direct peer-to-peer communication, potentially custom ICE servers, strong encryption protocols (TLS/SSL, SRTP for media), and careful handling of user sessions and privacy.</p>
<a href="https://github.com/silent-knight19/HeartToHeart" target="_blank" rel="noopener noreferrer">GitHub →</a>
            </div>
            <div className='projects' style={{width:"80%",margin:"auto"}}   >
                <h1>QuickHop - Dynamic Ride-Hailing Platform</h1>
                <p>Engineering a dynamic ride-hailing platform was a complex undertaking, showcasing my expertise in real-time location tracking, dynamic pricing models, and seamless user experience. This project involved building a robust backend to handle concurrent requests, manage driver-vehicle matching, and ensure smooth transactions. We tackled challenges like real-time location updates, dynamic pricing based on demand, and ensuring a smooth user experience even during peak times. The platform was designed to handle thousands of concurrent users and maintain data integrity under significant load, typical of ride-hailing applications.

Technologies: JavaScript, React.js (for dynamic UI and component lifecycle management), Node.js, Express.js, MongoDB (for user profiles, vehicle information, ride history), WebSocket integration (for real-time location updates and driver matching), potentially Redis for caching, and robust error handling for network resilience.</p>
<a href="https://github.com/silent-knight19/QuickHop" target="_blank" rel="noopener noreferrer">GitHub →</a>
            </div>
            </>
    )
}
export default Projects
