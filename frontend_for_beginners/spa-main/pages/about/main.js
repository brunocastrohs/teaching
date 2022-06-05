export default () => {
  const container = document.createElement("div");
  container.classList.add("container");
  
  container.innerHTML = `
    <section class="page-section">
      <figure class="box">
        <img class="about-img shadow" src="/DSW/SPA/assets/about.jpg">
      </figure>
      <div class="box">
        <div class="section-text">
        <h2>Aenean ornare velit</h2>
        <p>Aenean ornare velit lacus varius enim ullamcorper proin aliquam
        facilisis ante sed etiam magna interdum congue. Lorem ipsum dolor
        amet nullam sed etiam veroeros!<p>
        </div> 
      </div> 
    </section>  
  `

  return container; 
}