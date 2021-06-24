function Backdrop(props) {
  return <div className="backdrop" onClick={props.onCancel} />;
}

export default Backdrop;
// a <div /> can be a self closing tap if contains no content, react only rule
