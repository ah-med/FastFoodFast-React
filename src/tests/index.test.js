import ReactDOM from "react-dom";
import sinon from 'sinon';

import  renderToDOM from "../index";

describe("test ReactDOM.render", () => {
  it("should call ReactDOM.render", () => {
    const stubReactDOM = sinon.stub(ReactDOM, 'render').returns(jest.fn());
    const render = renderToDOM();
    expect(render).toBe(undefined);
    stubReactDOM.restore()
  });
});
