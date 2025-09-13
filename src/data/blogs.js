// src/data/blogs.js

// CORRECTED PATHS
const placeholderImage1 = '/articles/JVM-Arcitecture.drawio.png';
const placeholderImage2 = '/articles/JVM-Arcitecture.drawio.png';

// These are fine as they are full URLs
const placeholderImage3 = 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
const placeholderImage4 = 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

// ... rest of your file
// Featured blogs will appear with a large image and detailed description
export const featuredBlogs = [
    {
        slug: 'deep-dive-into-jvm-architecture',
        title: 'A Deep Dive into the Java Virtual Machine (JVM)',
        pdfUrl: '/articles/JVM Architecture.pdf', 
        description: 'Explore the core of Java by understanding the JVM architecture, including the ClassLoader, Runtime Data Area, and the Execution Engine.',
        content: `
            <h2>What is the JVM?</h2>
            <p>The JVM (Java Virtual Machine) is an engine that provides a runtime environment to launch Java applications. It is responsible for converting the compiled bytecode (.class file) into machine code that your computer can execute. The JVM is a crucial part of the Java Runtime Environment (JRE).</p>

            <h2>JVM Architecture</h2>
            <img src="/articles/JVM-Arcitecture.drawio.png" alt="Diagram of the JVM Architecture" class="my-4 bg-white px-10 py-5" />
            <p>The JVM is divided into three main subsystems that work together to run a Java application:</p>
            <ul>
                <li><strong>ClassLoader Subsystem</strong></li>
                <li><strong>Runtime Data Area (Memory Area)</strong></li>
                <li><strong>Execution Engine</strong></li>
            </ul>

            <hr class="my-8 border-lightest-navy/30">

            <h2>1. ClassLoader Subsystem</h2>
            <p>The ClassLoader is part of the JRE and is responsible for dynamically loading class files into the JVM's memory when they are required. This process has three main phases: Loading, Linking, and Initialization.</p>
            <img src="/articles/class loading subsystem.drawio.png" alt="Diagram of the Class Loading Subsystem" class="bg-white pl-2 py-2" />
            
            <h3>Loading</h3>
            <p>In this phase, the ClassLoader reads a .class file, generates the corresponding binary data, and saves it in the Method Area of the JVM's memory. There are three types of class loaders:</p>
            <ul>
                <li>
                    <strong>Bootstrap Class Loader:</strong>
                    <p>Loads core Java classes (e.g., java.lang, java.util) from rt.jar. It’s implemented in native languages like C/C++.</p>
                </li>
                <li>
                    <strong>Extension Class Loader:</strong>
                    <p>Loads classes from the JRE's extension directory (JAVA_HOME/lib/ext). For example, it would load a JAR file like mysql-connector.jar if placed in this folder.</p>
                </li>
                <li>
                    <strong>Application Class Loader:</strong>
                    <p>Loads classes from the application's classpath, which is specified by the -cp flag or the CLASSPATH environment variable.</p>
                </li>
            </ul>

            <h3>Linking</h3>
            <p>After a class is loaded, the linking phase prepares it for execution. This process involves three key steps:</p>
            <ul>
                <li>
                    <strong>Verification:</strong>
                    <p>Ensures the loaded bytecode is valid and doesn't violate JVM security rules, preventing issues like illegal memory access.</p>
                </li>
                <li>
                    <strong>Preparation:</strong>
                    <p>Allocates memory for static fields and initializes them with default values (e.g., 0 for integers, false for booleans, and null for objects).</p>
                    <pre><code>// Example:
class Test {
    static int x = 10;
    static boolean flag = true;
}

// During preparation:
// x is set to 0
// flag is set to false
                    </code></pre>
                </li>
                <li>
                    <strong>Resolution:</strong>
                    <p>Replaces symbolic references in the code (like class or method names) with actual direct references (memory addresses).</p>
                    <pre><code>// Resolution Map Example:
"java/lang/String"   → Direct reference to String class in memory
"java/io/PrintStream" → Direct reference to PrintStream class in memory
                    </code></pre>
                </li>
            </ul>

            <h3>Initialization</h3>
            <p>This is the final phase of Class Loading, here all static variables will be assigned with the original values, and the static block will be executed.</p>
            <pre><code>x = 10, flag = true.
Static block runs → changes x = 20.</code></pre>

            <hr class="my-8 border-lightest-navy/30">

            <h2>2. Runtime Data Area</h2>
            <p>The Runtime Data Area is the memory structure created by the JVM when it runs a program.</p>
            <P>It contains different memory blocks that store class info, objects, methods, variables, and threads.</p>
            <img src="/articles/Runtime Data Area.drawio.png" alt="Diagram of the Runtime Data Area" class="my-4 bg-white" />
            <ul>
    <li>
        <strong>Method Area:</strong>
        <p>
            Stores class metadata (info about class, interfaces, methods, fields).<br>
            Stores static variables and final constants.<br>
            Example: If you declare <code>static int x = 10;</code>, it goes here.
        </p>
    </li>
    <li>
        <strong>Heap Area:</strong>
        <p>
            Stores all objects and their instance variables.<br>
            Shared by all threads.<br>
            Example: <code>new Student();</code> → object created in heap.
        </p>
    </li>
    <li>
        <strong>JVM Stack (Per Thread):</strong>
        <p>
            Each JVM thread has its own JVM stack.<br>
            It stores frames, holds local variables, partial results, and references to heap objects.<br>
            Example: In the method <code>int sum(int a, int b)</code>, <code>a</code> and <code>b</code> are stored here.
        </p>
    </li>
    <li>
        <strong>Program Counter (PC) Register (Per Thread):</strong>
        <p>
            Each thread has a PC register.<br>
            Stores the address of the current instruction being executed.<br>
            Helps JVM know "what to execute next".
        </p>
    </li>
    <li>
        <strong>Native Method Stack:</strong>
        <p>
            Stores native method calls (written in languages like C/C++).<br>
            Example: If your Java program uses a library written in C, its call goes here.
        </p>
    </li>
</ul>

            <hr class="my-8 border-lightest-navy/30">

            <h2>3. Execution Engine</h2>
           <p>
    The Execution Engine (EE) is the heart of JVM.<br>
    After the Class Loader loads classes and the Runtime Data Area allocates memory.<br>
    The Execution Engine executes the bytecode instructions.<br>
    It is responsible for running the program line by line.
</p>
            <img src="/articles/EE.drawio.png" alt="Diagram of the Execution Engine" class="my-4 bg-white px-5 py-5" />
            <ul>
    <li>
        <strong>Interpreter:</strong>
        <p>
            Reads bytecode instructions one by one and executes them.<br>
            Simple, but slower because it interprets repeatedly.
        </p>
    </li>
    <li>
        <strong>JIT (Just-In-Time) Compiler:</strong>
        <p>
            To improve speed, the JVM uses a JIT compiler.<br>
            It compiles the entire bytecode and changes it to native code so whenever the interpreter sees repeated method calls, JIT provides direct native code for that part so re-interpretation is not required, thus efficiency is improved.
        </p>
    </li>
    <li>
        <strong>Garbage Collector (GC):</strong>
        <p>
            Manages memory automatically.<br>
            Frees memory of objects that are no longer referenced.<br>
            Example: If an object is not used anywhere, the GC removes it.
        </p>
    </li>
    <li>
        <strong>Native Method Interface (JNI):</strong>
        <p>
            Allows Java code to call functions written in other languages like C, C++.<br>
            Example: A Java program using a C library for faster image processing.
        </p>
    </li>
    <li>
        <strong>Native Method Libraries:</strong>
        <p>
            It is a collection of the Native Libraries (C, C++) which are required by the Execution Engine.
        </p>
    </li>
</ul>

           <h2>Conclusion</h2>
<p>
    From loading bytecode with the ClassLoader to managing memory in the Runtime Data Area and finally executing code with the Execution Engine, every part of the JVM architecture works together to make Java's "write once, run anywhere" philosophy a reality. A solid grasp of these fundamentals is a key step in moving from writing code that simply works to writing code that performs exceptionally well.
</p>
        `,
        image: placeholderImage2,
        date: 'September 13, 2025',
       tags: [
    'Java', 
    'JVM', 
    'JVM Architecture', 
    'Core Java', 
    'Garbage Collection', 
    'JIT Compiler',
    'Java Memory Management', 
    'Backend Development', 
    'Performance Tuning', 
    'Bytecode'
],
        author: 'Yash Thakare',
    }
];

// Recent blogs will appear as smaller cards in a grid
export const recentBlogs = [
    {
        slug: 'mastering-react-hooks',
        title: 'Mastering React Hooks for Cleaner Code',
        description: 'A deep dive into useState, useEffect, and custom hooks to streamline your React components.',
        content: `<h2>React Hooks Overview</h2><p>Content about React Hooks...</p>`,
        image: placeholderImage1,
        date: 'August 20, 2025',
        tags: ['React', 'JavaScript', 'Hooks'],
        author: 'Jane Doe',
    },
    {
        slug: 'nodejs-event-loop',
        title: 'Understanding Node.js Event Loop',
        description: 'Learn how the Node.js event loop works under the hood for asynchronous operations.',
        content: `<h2>Event Loop Basics</h2><p>Content about Node.js Event Loop...</p>`,
        image: placeholderImage3,
        date: 'July 15, 2025',
        tags: ['Node.js', 'Backend', 'JavaScript'],
        author: 'John Smith',
    },
    {
        slug: 'state-management-zustand',
        title: 'State Management with Zustand',
        description: 'Explore Zustand, a lightweight state management solution for React applications.',
        content: `<h2>Why Zustand?</h2><p>Content about Zustand...</p>`,
        image: placeholderImage4,
        date: 'June 28, 2025',
        tags: ['React', 'State Management', 'Zustand'],
        author: 'Jane Doe',
    }
];