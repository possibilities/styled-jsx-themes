const DemoMarkup = () =>
  <div id='top'>
    <h1>Themes demo (h1 header)</h1>
    <p>
      This is an anchor tag/hyper link:{' '}
      <a href='https://github.com/possibilities/styled-jsx-themes'>
        styled-jsx-themes - Github Repository
      </a>
    </p>
    <p>
      Paragraphs look like this. Font size along with line height and
      maximum width are optimized for reading.
    </p>
    <p>
      <em>Italic</em>, <strong>bold</strong>, and <code>monospace</code>.
      Itemized lists look like:
    </p>
    <ul>
      <li>this one</li>
      <li>that one</li>
      <li>the other one</li>
    </ul>
    <p>
      <strong>Here's a block quote</strong>:
    </p>
    <blockquote>
      <p>
        Man surprised me most about humanity. Because he sacrifices his
        health in order to make money. Then he sacrifices money to
        recuperate his health. And then he is so anxious about the
        future that he does not enjoy the present; the result being that
        he does not live in the present or the future; he lives as if he
        is never going to die, and then dies having never really lived.
        -James J Lachard
      </p>
    </blockquote>
    <h2 id='an-h2-header'>An h2 header</h2>
    <p>
      <strong>Some code blocks</strong>
    </p>
    <pre>
      <code>
        define foobar() {'{'}
        {'\n'}
        {'    '}print 'Welcome to flavor country!';{'\n'}
        {'}'}
      </code>
    </pre>
    <div className='sourceCode'>
      <pre className='sourceCode python'>
        <code className='sourceCode python'>
          <span className='im'>import</span> time{'\n'}
          <span className='co'># Quick, count to ten!</span>
          {'\n'}
          <span className='cf'>for</span> i{' '}
          <span className='op'>in</span>{' '}
          <span className='bu'>range</span>(<span className='dv'>10</span>):{'\n'}
          {'    '}
          <span className='co'># (but not *too* quick)</span>
          {'\n'}
          {'    '}time.sleep(<span className='fl'>0.5</span>){'\n'}
          {'    '}
          <span className='bu'>print</span> i
        </code>
      </pre>
    </div>
    <h3 id='an-h3-header'>An h3 header</h3>
    <p>A nested list:</p>
    <ol style={{ listStyleType: 'decimal' }}>
      <li>
        <p>First, get these ingredients:</p>
        <ul>
          <li>carrots</li>
          <li>celery</li>
          <li>lentils</li>
        </ul>
      </li>
      <li>
        <p>Boil some water.</p>
      </li>
      <li>
        <p>Dump everything in the pot and follow this algorithm:</p>
        <pre>
          <code>
            find wooden spoon{'\n'}uncover pot{'\n'}stir{'\n'}cover pot{'\n'}balance
            wooden spoon precariously on pot handle{'\n'}wait 10 minutes{'\n'}goto
            first step (or shut off burner when done)
          </code>
        </pre>
        <p>Do not bump wooden spoon or it will fall.</p>
      </li>
    </ol>
    <h1 id='header-level-1'>Header level 1</h1>
    <h2 id='header-level-2'>Header level 2</h2>
    <h3 id='header-level-3'>Header level 3</h3>
    <h4 id='header-level-4'>Header level 4</h4>
    <h5 id='header-level-5'>Header level 5</h5>
    <h6 id='header-level-6'>Header level 6</h6>
    <p>A horizontal line:</p>
    <hr />
    <p>
      Here's a link to <a href='http://foo.bar'>a website</a>, to a{' '}
      <a href='local-doc.html'>local doc</a>, and to a{' '}
      <a href='#an-h2-header'>section heading in the current doc</a>.
      Here's a footnote{' '}
      <a href='#fn1' id='fnref1'>
        <sup>1</sup>
      </a>.
    </p>
    <p>Tables can look like this:</p>
    <table>
      <caption>Shoes, their sizes, and what they're made of</caption>
      <thead>
        <tr>
          <th align='left'>size</th>
          <th align='left'>material</th>
          <th align='left'>color</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td align='left'>9</td>
          <td align='left'>leather</td>
          <td align='left'>brown</td>
        </tr>
        <tr>
          <td align='left'>10</td>
          <td align='left'>hemp canvas</td>
          <td align='left'>natural</td>
        </tr>
        <tr>
          <td align='left'>11</td>
          <td align='left'>glass</td>
          <td align='left'>transparent</td>
        </tr>
      </tbody>
    </table>
    <p>Multi-line tables:</p>
    <table style={{ width: '46%' }}>
      <colgroup>
        <col width='13%' />
        <col width='31%' />
      </colgroup>
      <thead>
        <tr>
          <th align='left'>keyword</th>
          <th align='left'>text</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td align='left'>red</td>
          <td align='left'>
            Sunsets, apples, and other red or reddish things.
          </td>
        </tr>
        <tr>
          <td align='left'>green</td>
          <td align='left'>
            Leaves, grass, frogs and other things it's not easy being.
          </td>
        </tr>
      </tbody>
    </table>
    <p>A horizontal rule follows.</p>
    <hr />
    <p>Images are responsive by default:</p>
    <div>
      <img
        alt='example image'
        src='/static/example.png'
        title='An exemplary image'
      />
      <p>example image</p>
    </div>
    <hr />
    <h1 id='form-elements'>Form Elements</h1>
    <form>
      <fieldset id='forms__input'>
        <legend>Input fields</legend>
        <p>
          <label htmlFor='input__text'>Text Input</label>{' '}
          <input
            id='input__text'
            placeholder='Text Input'
            type='text'
          />
        </p>
        <p>
          <label htmlFor='input__password'>Password</label>{' '}
          <input
            id='input__password'
            placeholder='Type your Password'
            type='password'
          />
        </p>
        <p>
          <label htmlFor='input__webaddress'>Web Address</label>{' '}
          <input
            id='input__webaddress'
            placeholder='http://yoursite.com'
            type='url'
          />
        </p>
        <p>
          <label htmlFor='input__emailaddress'>
            Email Address
          </label>{' '}
          <input
            id='input__emailaddress'
            placeholder='name@email.com'
            type='email'
          />
        </p>
        <p>
          <label htmlFor='input__phone'>Phone Number</label>{' '}
          <input
            id='input__phone'
            placeholder='(999) 999-9999'
            type='tel'
          />
        </p>
        <p>
          <label htmlFor='input__search'>Search</label>{' '}
          <input
            id='input__search'
            placeholder='Enter Search Term'
            type='search'
          />
        </p>
        <p>
          <label htmlFor='input__text2'>Number Input</label>{' '}
          <input
            id='input__text2'
            placeholder='Enter a Number'
            type='number'
          />
        </p>
        <p>
          <label htmlFor='input__text3'>Error</label>{' '}
          <input
            id='input__text3'
            placeholder='Text Input'
            type='text'
          />
        </p>
        <p>
          <label htmlFor='input__text4'>Valid</label>{' '}
          <input
            id='input__text4'
            placeholder='Text Input'
            type='text'
          />
        </p>
      </fieldset>
      <p>
        <a href='#top'>[Top]</a>
      </p>
      <fieldset id='forms__select'>
        <legend>Select menus</legend>
        <p>
          <label htmlFor='select'>Select</label>{' '}
          <select id='select'>
            <optgroup label='Option Group'>
              <option>Option One</option>
              <option>Option Two</option>
              <option>Option Three</option>
            </optgroup>
          </select>
        </p>
      </fieldset>
      <p>
        <a href='#top'>[Top]</a>
      </p>
      <fieldset id='forms__checkbox'>
        <legend>Checkboxes</legend>
        <ul>
          <li>
            <label htmlFor='checkbox1'>
              <input
                defaultChecked='checked'
                id='checkbox1'
                name='checkbox'
                type='checkbox'
              />{' '}
              Choice A
            </label>
          </li>
          <li>
            <label htmlFor='checkbox2'>
              <input
                id='checkbox2'
                name='checkbox'
                type='checkbox'
              />{' '}
              Choice B
            </label>
          </li>
          <li>
            <label htmlFor='checkbox3'>
              <input
                id='checkbox3'
                name='checkbox'
                type='checkbox'
              />{' '}
              Choice C
            </label>
          </li>
        </ul>
      </fieldset>
      <p>
        <a href='#top'>[Top]</a>
      </p>
      <fieldset id='forms__textareas'>
        <legend>Textareas</legend>
        <p>
          <label htmlFor='textarea'>Textarea</label>
          <textarea
            cols={48}
            id='textarea'
            placeholder='Enter your message here'
            rows={8}
            defaultValue={''}
          />
        </p>
      </fieldset>
      <p>
        <a href='#top'>[Top]</a>
      </p>
      <fieldset id='forms__html5'>
        <fieldset id='forms__action'>
          <legend>Action buttons</legend>
          <p>
            <input
              type='submit'
              defaultValue='input type=submit'
            />{' '}
            <input
              type='button'
              defaultValue='input type=button'
            />{' '}
            <input type='reset' defaultValue='input type=reset' />{' '}
            <input
              disabled
              type='submit'
              defaultValue='input disabled'
            />
          </p>
          <p>
            <button type='submit'>
              &lt;button type=submit&gt;
            </button>{' '}
            <button type='button'>
              &lt;button type=button&gt;
            </button>{' '}
            <button type='reset'>&lt;button type=reset&gt;</button>{' '}
            <button disabled type='button'>
              &lt;button disabled&gt;
            </button>
          </p>
        </fieldset>
        <p>
          <a href='#top'>[Top]</a>
        </p>
      </fieldset>
    </form>
    <div>
      <hr />
      <ol>
        <li>
          <p>
            Footnote text goes here.<a href='#fnref1'>↩</a>
          </p>
        </li>
      </ol>
    </div>
  </div>

export default DemoMarkup
