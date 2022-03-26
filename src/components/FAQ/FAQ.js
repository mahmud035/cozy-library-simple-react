import React from 'react';
import './FAQ.css';

const FAQ = () => {
  return (
    <div className="faq">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-container">
        {/* Question:1  */}
        <h3>1. How React Works?</h3>
        <p>
          React is a JavaScript library (not a framework) that creates user
          interfaces (UIs) in a predictable and efficient way using{' '}
          <strong>declarative code. </strong> Declarative code describes what we
          want instead of saying how to do it. Declarative code describes the
          end result. In practice, that means declarative code is lightweight,
          easier to understand and change, and has less bugs. We use declarative
          code to create components, which is how we display information.
          Essentially, components are reusable UIs which allow us to split the
          app into separate blocks that act independently of each other. React
          components change what the user sees. The syntax used by React
          components is called JSX (JavaScript XML). JSX is simply syntactic
          sugar for creating very specific JavaScript objects. React allows us
          to effectively re-construct our DOM in JavaScript and push only those
          changes to the DOM which have actually occurred.
        </p>

        {/* Question:2 */}
        <h3>2. Difference between props and state in React.</h3>
        <table>
          <tr>
            <th>props</th>
            <th>state</th>
          </tr>
          <tr>
            <td>The Data is passed from one component to another.</td>
            <td> The Data is passed within the component only.</td>
          </tr>
          <tr>
            <td>It is Immutable (cannot be modified).</td>
            <td>It is Mutable ( can be modified).</td>
          </tr>
          <tr>
            <td>Props can be used with state and functional components.</td>
            <td>
              State can be used only with the state components/class component
              (Before 16.0).
            </td>
          </tr>
          <tr>
            <td>Props are read-only.</td>
            <td>State is both read and write.</td>
          </tr>
          <tr>
            <td>Props make components reusable.</td>
            <td> State cannot make components reusable.</td>
          </tr>
          <tr>
            <td>Just display the incoming data</td>
            <td>State is also responsible for fetching remote data</td>
          </tr>
          <tr>
            <td>
              The component can't change incoming props. Only a parent is
              allowed to change props of the child component.
            </td>
            <td>
              Only the component that owns state can change it. State is private
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default FAQ;
