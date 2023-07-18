<template>
    <select @change="onChange()" v-model="selected" class="form-select block border rounded p-3 w-full mb-5">
        <option value="0">Select Country</option>
        <option v-for="country in countries" :value="country.ID">
            <span v-if="country.ID == undefined">Global</span>
            <span v-else>{{ country.Country }} </span>
        </option>
        <!-- TODO interface del input -->
    </select>

</template>
<script >
export default {
    name: 'CountrySelect',
    props: ['countries'],
    s: ["get-country", "get-title"],
    setup(props, context) {


    },
    data() {
        return {
            selected: 0,
        }
    },
    methods: {
        onChange() {
            const country = this.countries.find((item) => item.ID === this.selected);
            this.$emit('get-country', country)
            //this.$emit('get-title', 'GLOBAL DETAILS')
        }
    }
}
</script>
