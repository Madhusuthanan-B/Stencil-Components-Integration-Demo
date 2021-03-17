<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <core-card header="Component Demo" subheader="Sub header">
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, quam
        enim! Vel neque esse qui beatae aliquam, praesentium non nobis odit
        velit veniam error quo laboriosam enim harum. Laborum, error! Quae
        debitis quasi illum, optio eius at eaque molestias quo quam fugit
        reiciendis a eum adipisci officiis voluptate nobis atque magnam suscipit
        consectetur dolorem. Porro aspernatur sit nihil quasi doloremque.
        Molestiae, itaque aspernatur. Et nam velit incidunt, debitis eos illum
        ipsum, enim illo eum rem asperiores. Aliquid provident maiores deserunt
        facilis, delectus, suscipit dolore, impedit sit nemo distinctio porro
        enim!
      </p>
    </core-card>
    <core-card>
      <div class="demo-section">
        <core-btn color="primary">Primary</core-btn>
        <core-btn color="secondary">Secondary</core-btn>
        <core-btn color="error">Error</core-btn>
        <core-btn color="warn">Warn</core-btn>
        <core-btn color="info">Info</core-btn>
      </div>
      <div class="demo-section">
        <core-spinner></core-spinner>
        <core-spinner type="border" color="primary"></core-spinner>
        <core-spinner type="border" color="secondary"></core-spinner>
        <core-spinner type="border" color="error"></core-spinner>
        <core-spinner type="border" color="warn"></core-spinner>
        <core-spinner type="border" color="info"></core-spinner>
      </div>
    </core-card>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.demo-section {
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin: 1rem;
}
</style>
