
function TopicsPage() {
    function scrollToSection(e, id) {
        e.preventDefault();

        const section = document.getElementById(id);

        if (section) {
            const y =
                section.getBoundingClientRect().top + window.pageYOffset;

            window.scrollTo({
                top: y,
                behavior: "smooth"
            });
        }
    }
    return (
        <>

<h2>Web Development Concepts</h2>
<nav class="local">
    <a
        href="#webServers"
        onClick={(e) => scrollToSection(e, "webServers")}
    >
        Web Servers
    </a>

    <a
        href="#frontEnd"
        onClick={(e) => scrollToSection(e, "frontEnd")}
    >
        Frontend Design
    </a>

    <a
        href="#optimizingImages"
        onClick={(e) => scrollToSection(e, "optimizingImages")}
    >
        Optimizing Images
    </a>

    <a
        href="#creatingFavicons"
        onClick={(e) => scrollToSection(e, "creatingFavicons")}
    >
        Creating Favicons
    </a>

    <a
        href="#javaScript"
        onClick={(e) => scrollToSection(e, "javaScript")}
    >
        JavaScript
    </a>
</nav>

            <article id="webServers">

                <h3>Web Servers</h3>
                <p>


                    The configuration of a web server is set up so that a request for (/) is mapped to a homepage file
                    called the <strong>designated homepage</strong> on that server. In most web applications, the file index.html located in the
                    root directory is the web application's designated homepage, but there are other file names that are
                    used. Different servers will look for different file names. For example, Microsoft's .NET platform accepts default.html as a homepage.
                    Other servers will check for index.js and index.php homepage files. The index.html or other homepage files are what's returned by the web application
                    after a GET request for (/) is received. Since the homepage file is automatically loaded from the root
                    directory, its URL doesn't have to include its file name.
                </p>
                <p>


                    Viewing the web page in Web Dev/Inspector mode within the network tab allows you to see the web
                    page's <strong>status</strong>, <strong>request method</strong> used, <strong>IP</strong>, <strong>policy</strong>,
                    <strong>language</strong>, <strong>cache instructions</strong> and <strong>browser version</strong>.
                    The requested method used on this page
                    is <strong>GET</strong>, which means data is being retrieved from the webpage. On the network tab,
                    you can basically see how a file was requested and what was returned in response.

                    When the index.html file is viewed from a local computer, you will not see detailed information in
                    request
                    headers versus the web server view which
                    shows these details. The reason the Headers tab when viewed from a local computer doesn't display
                    the same
                    information as when viewed from a web server could be that the request from the local computer
                    wasn't sent
                    over the network and was served from a local cache.
                </p>
                <p>

                    The favicon.ico file has a status code of 200 meaning the GET request for the file succeeded, and the
                    server
                    program responded by sending
                    this status code. When requested resources are static HTML files like the favicon.ico image file,
                    the web server
                    will read the file and send it
                    back without invoking other server programs. When requesting access to this website, the OSU server
                    provides
                    this file automatically.

                    The main.css and main.js files are mentioned in the boilerplate code but have not yet been created,
                    so they are
                    not found on the web server when the
                    HTTP request is sent. This causes the server to respond with status code 404, or Not Found.


                </p>
                <p>

                    Description of URL parts for web file https://web.engr.oregonstate.edu/~smithreg/a1-smithreg/ are as
                    follows: <strong>https//</strong> - scheme that identifies protocol web client has to use to request
                    resource. The https portion of the
                    scheme
                    encrypts data being sent between client/server.

                    <strong>oregonstate.edu</strong> - Domain server name of the machine that the resource is being
                    hosted on.

                    <strong>web.engr</strong> - These are subdomains which are subsections of the DNS and are appended
                    in front of the domain name.

                    <strong>/~smithreg/a1-smithreg/</strong> - This is the path to resource on the web server. The
                    resource is the designated homepage
                    as described above.

                </p>
            </article>
            <article id="frontEnd">

                <h3>Frontend Design</h3>
                <p>
                    <strong>Frontend Design</strong> focuses on what the user experiences when the user interacts with a
                    website, web app, or any
                    other product or system.
                    More specifically, frontend design focuses on a web page's visual design, <strong>graphical
                        user-interface(GUI)</strong>
                    and the user's overall interactive experience with the webpage. To measure the quality of the user
                    experience,
                    one must consider the <strong>usability</strong> and <strong>inclusivity</strong> of the webpage.
                </p>

                <p>To ensure usability/inclusivity of a website, designers often consider <strong>The five "E"s of
                        usability</strong>
                    as described by the creators of the World Usability Day:</p>
                <dl>
                    <dt><strong>Effective</strong></dt>
                    <dd>To be effective, a website must help users meet their goals with accurate results.</dd>

                    <dt><strong>Efficient</strong></dt>
                    <dd>A website must allow user's to quickly perform tasks with a minimal number of steps.</dd>

                    <dt><strong>Easy to navigate</strong></dt>
                    <dd>Any user should be able to navigate the website with ease upon initial and subsequent visits. It
                        should be Easy for the user to locate their goal with clicking or searching within the website.</dd>

                    <dt><strong>Error-free</strong></dt>
                    <dd>Websites should avoid accessibility and availability issues by learning how common errors are
                        experienced by users' and what roadblocks these errors create.
                        Developers should strive to remove these roadblocks as much as possible.</dd>

                    <dt><strong>Enjoyable</strong></dt>
                    <dd>Users' should have an enjoyable and <strong>engaging</strong> experience when using a website.
                        To achieve this, a website should
                        fulfill the target users' needs with its content and design. Most importantly, a developer
                        should try to design a website that will compel
                        a user to use that site often.</dd>
                </dl>

                <p>
                    There are several <strong>Page Layout Tags</strong> used in the design of this webpage. Page-layout
                    Tags
                    break up the flow of site content.
                    The <strong>header</strong> tag is used to denote the masthead for the site which includes
                    information such as
                    name, publisher, and slogans. The <strong>nav</strong> tag allows the user to switch from the
                    currently displayed page to
                    other pages. <strong>Main</strong> tags specify primary blocks of content in a website.
                    <strong>Section</strong> tags are used
                    to group related content. The <strong>article</strong> tag can be used inside a section tag and
                    is used to mark self-contained
                    information that is reusable. Article tags can be marked with an <strong>ID selector</strong> to aid
                    in reusability. <strong>Footer</strong>
                    tags are generally used to display legal and contact information, as well as provide links to other
                    critical webpages. Website owner Copyright information
                    should be placed here.
                </p>

                <p>
                     <strong>Anchor tags</strong>(&lt;a&gt;) are used to create hyperlinks which can be used to link external content, internal
                    content and links from page-to-page within a website. A href attribute that specifies the URL and a link description are
                    specified within opening and closing anchor tags.
                </p>

                <ol>
                    <li>
                        <strong>External anchors</strong> are mainly used within a website to create a hyperlink to external websites. This type of anchor
                    usually involves using an <strong>absolute path</strong>, or complete URL, to a resource
                </li>
                    <li>
                        <strong>Internal anchors</strong> can  link elements within a page. For example, to jump from one section in a webpage to another,
                        you could use an internal anchor to do so. Internal anchors can use the ID value of an <strong>ID attribute</strong> tag as a reference location.
                    </li>
                    <li>
                        <strong>Page-to-page anchors</strong> are used to link pages and resources within the same website. This anchor method uses a <strong>relative URL</strong> which points to a location relative to a file where this URL is used.</li>
                </ol>

            </article>
            <article id="optimizingImages">
                <h3>
                    Optimizing Images
                </h3>
                <p>
                    There are six ways to ensure an image is optimized before posting it on a website. The first requires
                    providing a <strong>Descriptive file name</strong>. Descriptive file names improve search engine optimization (<strong>SEO</strong>).
                    The file name should describe who or what's in the image, as well as where and when the image was taken to the best of the web designer's ability.
                    Descriptive names makes it easier for search engines to categorize the image, making it easier for users looking for similar images to find it. Image
                    <strong>file sizes</strong> should be reduced by <strong>compression</strong> or <strong>resizing</strong> the image as much as possible. It should be noted that <strong>Lossless compression</strong>
                    can result in permanent loss to image data and <strong>pixelation</strong>. <strong>Lossless compression</strong> preserves all the data of the original image while reconstructing it.
                    Another optimization method is to process an image to <strong>Exact dimensions</strong>. This can be done by <strong>cropping</strong> and reducing and image dimensions to meet
                    the specific space requirements of a website.</p>

                <p>Making sure an image has the <strong>Correct file format</strong> is an optimization technique used to display different types of images
                    with the highest degree of quality possible. <strong>JPG</strong> and <strong>WebP</strong> formats are mostly used for photos and screenshots. <strong>PNG</strong>, <strong>GIF</strong> and <strong>SVG</strong> formats for
                    line-art, animation and transparency. PNG formats are also used for screenshot images. The last optimization method is choosing the right <strong>Color mode</strong>.
                    Four color modes that are used by most developers are <strong>Names</strong>, <strong>Hexadecimal/Hexa</strong>, <strong>RGB/RGBa</strong>, and <strong>HSL/HSLa</strong>.
                    Name colors are generic predefined HTML colors. Hexidecimal colors are custom colors created by using a six digit hex code. Each consecutive pairs of this code represent
                    variations of red, green, and blue(#RRGGBB). Hexa involves adding an alpha value to the six-digit code (RRGGBBAA). The alpha value can change the colors transparency from low to high.
                     HSL/a color modes effect hue, saturation, luminosity, and alpha transparency of a color. HSL and HSLa values can be modified to fit the designer's needs.

                </p>
            </article>
            <article id="creatingFavicons">
                <h3>
                    How to create a favicon
                </h3>
                <p>
                    <strong>Favicons</strong> can be used by browsers and devices to identify websites and applications as well as launch them. Favicon icons are usually displayed in a browser tab, or touch icon on devices to
                    identify a company. The favicon icon is usually saved as a .GIF, .PNG, .ICO or SVG file format. When creating a favicon it's considered best practice to
                    modify it so that it works or displays properly on different devices. The favicon is then saved in the correct file format for those different browsers and devices. The .SVG and .PNG file formats
                    are the most commonly used. When a browser picks up these files it will anchor them to bookmarks, favorites lists, search result or device screen if requested to do so.

                </p>
            </article>

            <article id="javaScript">
                <h3>All about JavaScript</h3>
            </article>
            <p>
                Values in JavaScript are represented as one of the following <strong>Data Types:</strong> <strong>Numbers</strong>, <strong>Boolean values</strong>, <strong>Strings</strong>, <strong>Symbols</strong>,
                <strong>Special values</strong> or <strong>Objects</strong>. Numbers are represented in JavaScript as double-precision floating-point numbers. It's considered best practice
                to know which data type you should be using and not rely on JavaScript to perform automatic conversions of strings to numbers, for example. Built-in functions like <strong>parseFloat/parseInt</strong> should be used for
                number conversions. Booleaean types return either true of false values. Bool values should only be used in conditional statements. Strings containing only characters that are enclosed in double or single quotes are <strong>String literals</strong>. Strings
                containing expressions are called <strong>Template literals</strong>, which are enclosed in <strong>backticks</strong>. Symbols can be used to assign unique identifiers to JavaScript objects. The JavaScript Special values are <strong>undefined</strong> and
                <strong>null</strong>. Uninitialized variables, incorrect number of arguments used while calling functions, and functions that don't return anything all result in undefined being used to replace those values. Null is used to indicate that a variable points
                to no object. Another special value is <strong>NaN</strong>, which will be returned when an expected number value doesn't actually evaluate to a number.
            </p>
            <p>
                JavaScript <strong>Objects</strong> are non-primitive value types consisting of name-value pairs. The names are also referred to as properties of the object. The properties of objects can be created, read, updated, or deleted <strong>(CRUD)</strong> by developers.
                Dot notation is used to add or update properties using the (.) operator. The dot operator is also used to read properties. Properties can also be deleted using the <strong>delete</strong> operator. <strong>Arrays</strong> are JavaScript objects whose properties
                are strings. Array elements are accessed using 0-based integer index in square brackets or by the string-based property name. Array values can be any JavaScript type. <strong>JSON</strong> stands for JavaScript Object Notation, and is used to exchange
                data across different platforms, applications, and programming languages in human-readable text. JSON strings can be created from JavaScript objects and vice versa.

            </p>
            <p>
                <strong>Conditionals</strong> in JavaScript are used to control flow of execution and for iteration. Using conditionals in JavaScript, developers can control which block of code gets executed based
                on whether or not a condition they have written evaluates to true or false for that block. JavaScript uses <strong>if/else</strong> and <strong>switch statements</strong> to control flow of execution.
                If/else statements control execution of code blocks by conditional statements that evaluate to true or false. Switch statements will evaluate a value in a expression and then compare it to different case clauses to
                find a value that matches. If the expression value matches that of the case clause, then that case code will be executed. <strong>Loops</strong> allow code to be executed repeatedly as long as some condition is true. <strong>For loops</strong> repeat
                code a specified number of times. <strong>While loops</strong> are similar to for loops but will always execute a block of code while a condition is true. This can lead to infinite loops if the while loop isn't setup correctly. <strong>Do while loops</strong>
                are similar to while loops, except that they will always execute a block of code once and then evaluate the conditional statement. <strong>For in loops</strong> are used to iterate over object properties in no particular order. <strong>For of loops</strong>
                iterate over iterable objects like arrays.
            </p>
            <p>
                <strong>Object-oriented programming (OOP)</strong> is supported by JavaScript and allows developers to create objects
                that encapsulate data and behavior. OOP uses <strong>objects, classes, inheritance, encapsulation, and polymorphism</strong>. Classes are used
                as a blueprint to create objects that have similar properties and methods. Inheritance is used by objects to inherit methods and properties from other objects. JavaScript achieves this through
                <strong>prototyping</strong>. Prototyping is used to create many objects which share common properties and is important for code reuse.
            </p>
            <p>
                JavaScript supports <strong>Functional programming</strong>, which means <strong>first class</strong> values are functions that can be assigned to variables, passed as arguments and returned from other functions.
                Some key concepts in functional programming are <strong>immutability</strong> and <strong>higher order functions</strong>. Immutability is the ability to prevent an object or data structure from being changed once it is created. In functional programming,
                higher order functions are used to return functions as results or take other functions as arguments.
            </p>


        <footer>
            <p>
            &copy; 2024 Reggie Smith
            </p>
        </footer>
        </>
);
}
export default TopicsPage;