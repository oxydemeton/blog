<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<article>
    <h3>Example <br> Heading</h3>
    <p>
        Veniam aute mollit ullamco enim in cupidatat Lorem consectetur. Adipisicing ex duis Lorem voluptate occaecat proident cillum enim cupidatat esse nulla commodo fugiat. Esse dolor pariatur officia enim cillum fugiat laboris esse pariatur dolor commodo dolore ullamco sit. Nisi velit adipisicing aliqua cupidatat irure labore officia ullamco eiusmod culpa aliquip non aliquip reprehenderit. Culpa ullamco ullamco tempor elit sint irure ut in ut laboris id ex.
    </p>
    <h5>Small Text</h5>
    <p class="ft-size-sm">
        Laborum sit irure ea incididunt duis aute enim. Nulla mollit id cillum sunt aute aliquip sint sunt esse. Consectetur est fugiat excepteur pariatur aliqua ea pariatur et id laboris.
    </p>
    <hr>
    <p>
        Regular <b>Bold</b> Regular <i>italic</i> Regular <u>Underlined</u> Regular <em>Emphasized</em> Regular <strong>Strong</strong>
        Regular <q>Quote and Quote</q> Regular <abbr title="Abbreviation">Abbr</abbr> Regular <abbr class="abbr-show-explanation" title="Abbreviation">Abbr</abbr>
        Regular <dfn>Definition Example</dfn> Regular <mark>Marker</mark>
    </p>
    <h5>Larger Text</h5>
    <p class="ft-size-md">                
        Regular <b>Bold</b> Regular <i>italic</i> Regular <u>Underlined</u> Regular <em>Emphasized</em> Regular <strong>Strong</strong>
        Regular <q>Quote and Quote</q> Regular <abbr title="Abbreviation">Abbr</abbr> Regular <abbr class="abbr-show-explanation" title="Abbreviation">Abbr</abbr>
        Regular <dfn>Definition Example</dfn> Regular <mark>Marker</mark>
    </p>
    <hr>
    <details>
        <summary>Blockquote</summary>
        <blockquote>
            Reprehenderit tempor proident fugiat non dolor exercitation occaecat do adipisicing tempor eu. Nisi anim qui anim minim ad aliqua qui duis. Qui culpa sit sit veniam cillum in eu. <br>
            Tempor enim laboris consectetur cupidatat magna excepteur voluptate labore. Ea cillum consequat duis laboris aute ut magna Lorem non Lorem ut aliqua. Eiusmod cupidatat aliquip do elit sunt do. Mollit occaecat ullamco veniam non est nisi incididunt Lorem nostrud Lorem. Aliqua id culpa magna ea ut consectetur magna fugiat exercitation voluptate qui. Sint ex ex nostrud dolor aute reprehenderit elit duis elit sit tempor.
            <br>
            <cite>--Lorem Impsum Extension</cite>
        </blockquote>
    </details>
</article>
<hr>
<details>
    <summary>Example Form</summary>
    <form action="#">
        <textarea name="area" cols="30" rows="2" style="display: inline;">Text Area</textarea><br>
        <input type="checkbox" name="check">Checkbox <br>
        <input type="text" name="text" placeholder="Text">
        <input type="email" placeholder="Email"> 
        <input type="tel" placeholder="Telephone">
        <input type="search" placeholder="Search">
        <input type="password" placeholder="Password"> <br>
        <input type="number" placeholder="number"> <input type="range" min="0" max="5" step="1"> Range <br>
        <input type="color"> Color Picker <br>
        <input type="radio" name="radio" checked={true}><input type="radio" name="radio"> Radio Buttons <br>
        <select name="selection">
            <option value="">Pleas select your favorite</option>
            <optgroup label="Animals">
                <option value="Dog">Dog</option>
                <option value="Cat">Cat</option>
                <option value="Bird">Bird</option>
            </optgroup>
            <optgroup label="Color">
                <option value="White">White</option>
                <option value="Black">Black</option>
                <option value="Gray">Gray</option>
            </optgroup>
        </select>
        <br>
        <fieldset>
            <legend>Times and Dates</legend>
            <input type="date"> Datepicker <br>
            <input type="datetime"> Datetime <br>
            <input type="datetime-local"> Datetime Local <br>
            <input type="month"> Month <br>
            <input type="week"> Week <br>
            <input type="time"> Time <br>
        </fieldset>
        <input type="file"> File <br>
        <input type="button" value="Button"> <input type="reset" value="Reset"> <input type="submit" value="Submit"> <button disabled={true}>Disabled</button>
        <br>
        <button class="btn-action">ACTION</button>
        <br>
        Progressbar <progress max="100" value="50">50%</progress>
    </form>
</details>
<hr>
<details>
        <summary>Lists</summary>
        <summary>Ul</summary>
        <ul>
            <li>First Item</li>
            <li>Second Item</li>
            <li>
                Third Item
                <ul>
                    <li>First Inside</li>
                    <li>
                        Second Inside
                        <ul>
                            <li>Next Inside</li>
                            <li>Next Inside</li>
                        </ul>
                    </li>
                    <li>Third Inside</li>
                </ul>
            </li>
            <li>Fourth Item</li>
        </ul>
        <summary>Ol</summary>
        <ol>
            <li>First Item</li>
            <li>Second Item</li>
            <li>
                Third Item
                <ol type="a">
                    <li>First Inside</li>
                    <li>
                        Second Inside
                        <ol type="I">
                            <li>Next Inside</li>
                            <li>Next Inside</li>
                        </ol>
                    </li>
                    <li>Third Inside</li>
                </ol>
            </li>
            <li>Fourth Item</li>
        </ol>
</details>
<details>
        <summary>Table</summary>
        <table>
            <caption>Table Caption</caption>
            <thead>
                <tr><th></th> <th>First Col</th> <th>Second Col</th></tr>
            </thead>
            <tbody>
                <tr><th>First Row</th><td>First Data</td> <td>Second Data</td></tr>
                <tr><th>Second Row</th><td>First Data</td> <td>Second Data</td></tr>
                <tr><th>Third Row</th><td>First Data</td> <td>Second Data</td></tr>
                <tr><td>3 Row</td><td>1 Data</td> <td>2 Data</td></tr>
            </tbody>
        </table>
</details>
<hr>
<details>
        <summary>Description List</summary>
        <dl>
            <dt>Color Themes</dt>
            <dd>
                Color Themes are Defined once and effect accent colors and main colors of a page or section.
            </dd>
            <dt>Effect</dt>
            <dd><dfn>Main colors</dfn> are used for regular text and the background. They have a strong accent against each other and make up most of the page.</dd>
            <dt>Accent Colors</dt>
            <dd>A <dfn>small Accent</dfn> is used for small decorations and details.</dd>
            <dd>A <dfn>large Accent</dfn> is used for eye catch and main elements to direct users.</dd>
        </dl>
</details>
<hr>
<details>
    <summary>Coding</summary>
    <h3>Code</h3>
    <code>
        <h4>Input</h4>
        <kbd>CTRL</kbd> + <kbd>p</kbd> for print.
        <h4>Code</h4>
<pre>.cs-default
<var>--cs-main-dark</var>;
<var>--cs-main-light</var>;
<var>--cs-accent-dark-sm</var>;
<var>--cs-accent-dark-lg</var>;
<var>--cs-accent-light-sm</var>);
<var>--cs-accent-light-lg</var>;
<var>--cs-selection</var>;
</pre>
        <h4>Sample Output</h4>
        <samp>
            What you are seeing here as <a href="#cs-default">default scheme</a>.<br>
            Nothing else.
        </samp>
    </code>
</details>