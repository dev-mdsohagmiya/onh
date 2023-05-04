import "./404.css";
function generateId1() {
  const length = 13;
  const characters = "0123456789";
  return Array.from(
    { length },
    () => characters[Math.floor(Math.random() * characters.length)]
  ).join("");
}
function generateId2() {
  const length = 13;
  const characters = "0123456789adbcdh";
  return Array.from(
    { length },
    () => characters[Math.floor(Math.random() * characters.length)]
  ).join("");
}
function generateId3() {
  const length = 5;
  const characters = "0123456789adbcdh";
  return Array.from(
    { length },
    () => characters[Math.floor(Math.random() * characters.length)]
  ).join("");
}
function _404() {
  return (
    <div>
      <main>
        <p className="devinfo-container">
          <span className="error-code">
            <strong>404</strong>: NOT_FOUND
          </span>
          <span className="devinfo-line">
            Code: <code>DEPLOYMENT_NOT_FOUND</code>
          </span>
          <span className="devinfo-line">
            ID:{" "}
            <code>
              bom1::{generateId3()}-{generateId1()}-{generateId2()}
            </code>
          </span>
        </p>
        <a href="https://vercel.com/docs/custom-domains#assigning-a-domain-to-a-git-branch">
          <div className="note">
            {window.location.hostname} might be available. Click here to learn
            how to assign it to a project.
          </div>
        </a>
      </main>
    </div>
  );
}

export default _404;
