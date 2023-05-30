<template>
    <v-card
      class="pa-10 ma-auto my-12"
      max-width="374"
    >
        <h4 class="font-weight-bold text-h5 text-grey-darken-4">Registration</h4>
        <p class="mb-3 text-caption text-grey-darken-1">Be the part of us</p>
        <v-form class="mb-2"
            ref="form"
            lazy-validation
        >
            <v-text-field
                color="green"
                label="Fullname"
                variant="underlined"
                :rules="[rules.required]"
                class="mb-4"
                hide-details="auto"
            ></v-text-field>
            <v-text-field
                color="green"
                label="Username"
                variant="underlined"
                :rules="[rules.required]"
                class="mb-4"
                hide-details="auto"
            ></v-text-field>
            <v-text-field
                color="green"
                label="Email"
                variant="underlined"
                :rules="[rules.required, rules.email]"
                class="mb-4"
                hide-details="auto"
            ></v-text-field>
            <v-text-field
                :append-inner-icon="showPaswd ? 'mdi-eye' : 'mdi-eye-off'"
                color="green"
                label="Password"
                variant="underlined"
                :rules="[rules.required, rules.min]"
                :type="showPaswd ? 'text' : 'password'"
                @click:append-inner="showPaswd = !showPaswd"
                hide-details="auto"
                hint="At least 8 characters"
            ></v-text-field>
        </v-form>
        <v-card-actions class="pa-0">
            <v-btn color="yellow-accent-3" block variant="flat" class="text-none">
                Sign in
            </v-btn>
        </v-card-actions>
        <div class="d-flex">
            <v-btn to="/" link variant="plain" :ripple="false" class="text-none px-0 text-caption" size="x-small" color="blue-darken-3">Already have an account</v-btn>
        </div>
    </v-card>
</template>
<script>
export default{
    data: () => ({
        showPaswd:false,
        rules: {
            required: value => !!value || 'Field is required',
            email: value => {
                const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                return pattern.test(value) || 'Invalid e-mail.'
            },
            min: v => v.length >= 8 || 'Min 8 characters',
        },
    }),
}
</script>