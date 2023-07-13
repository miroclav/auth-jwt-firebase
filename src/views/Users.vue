<template>
    <div>
        <h2>Cars</h2>
        <Loader v-if="showLoader" />
        <div class="flex flex-column gap-3" v-else>
            <Card v-for="(car, i) in cars" :key="i">
                <template #title> {{ car.name }} </template>
                <template #subtitle> {{ car.type }} </template>
            </Card>
        </div>
    </div>
</template>

<script>
import Loader from '../components/Loader.vue'

export default {

}
</script>

<style lang="css" scoped></style>