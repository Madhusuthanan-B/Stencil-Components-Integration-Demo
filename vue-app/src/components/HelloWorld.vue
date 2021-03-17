<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <core-card header="Nav bar">
      <section class="flex-col">
        <core-nav-bar
          header="Title"
          options='[{"name": "Home", "value": "/home"}, {"name": "Features", "value": "/features"}, {"name": "Pricing", "value": "/pricing"},  {"name": "Launch", "value": "/launch", "isDisabled": true}]'
        >
        </core-nav-bar>
      </section>
    </core-card>

    <core-card header="List Group">
      <section class="flex-col">
        <core-list-group
          options='[{"name": "Ship 1", "value": "ship1_imo"},{"name": "Ship 2", "value": "ship2_imo"},{"name": "Ship 3", "value": "ship3_imo", "isDisabled": true}, {"name": "Ship 4", "value": "ship4_imo"}]'
        >
        </core-list-group>
      </section>
    </core-card>

    <core-card header="Card" subheader="This works based on slot projection">
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

    <core-card header="Spinners">
      <section class="flex-col">
        <core-spinner></core-spinner>
        <core-spinner type="border" color="primary"></core-spinner>
        <core-spinner type="border" color="secondary"></core-spinner>
        <core-spinner type="border" color="danger"></core-spinner>
        <core-spinner type="border" color="warn"></core-spinner>
        <core-spinner type="border" color="info"></core-spinner>
        <core-spinner type="grow" color="primary"></core-spinner>
        <core-spinner type="grow" color="secondary"></core-spinner>
        <core-spinner type="grow" color="danger"></core-spinner>
        <core-spinner type="grow" color="warn"></core-spinner>
        <core-spinner type="grow" color="info"></core-spinner>
      </section>
    </core-card>

    <core-card header="Buttons">
      <section class="flex-col">
        <core-btn color="primary">Primary</core-btn>
        <core-btn color="secondary">Secondary</core-btn>
        <core-btn color="danger">Error</core-btn>
        <core-btn color="warn">Warn</core-btn>
        <core-btn color="info">Info</core-btn>
        <core-btn color="success">Success</core-btn>
        <core-btn color="primary" type="outline">Primary</core-btn>
        <core-btn color="secondary" type="outline">Secondary</core-btn>
        <core-btn color="danger" type="outline">Error</core-btn>
        <core-btn color="warn" type="outline">Warn</core-btn>
        <core-btn color="info" type="outline">Info</core-btn>
        <core-btn color="success" type="outline">Succees</core-btn>
      </section>
    </core-card>

    <core-card header="Drop downs">
      <section class="flex-col">
        <core-drop-down
          label="Small"
          color="primary"
          size="small"
          options='[{"name": "Small option 1", "value": "Small option 1 value"}, {"name": "Small option 2", "value": "Small option 2 value"}]'
        >
        </core-drop-down>
        <core-drop-down
          label="Default"
          options='[{"name": "Option 1", "value": "Option 1 value"}, {"name": "Option 2", "value": "Option 2 value"}, {"name": "Option 3", "value": "Option 3 value"}]'
        >
          Default</core-drop-down
        >
        <core-drop-down
          label="Large"
          size="large"
          color="info"
          options='[{"name": "Option 1", "value": "Option 1 value"}]'
        >
        </core-drop-down>
      </section>
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
.flex-col {
  display: flex;
  justify-content: space-evenly;
  margin-top: 10px;
}
core-card {
  margin: 50px;
}
</style>
