<template>
    <div class="px-4 mx-auto">
        <div class="container md:flex ">
            <main class="px-4 mb-6" flex-grow>
                <p class="text-lg text-indigo-600 font-semibold tracking-wide uppercase mb-5">Can you help me <i
                        class="fa-solid fa-question"></i></p>
                <p class="mb-4  text-justify text-lg font-light">This is part of my final project, so I want you to take
                    part of this.</p>
                <p class="mb-5 text-lg font-light">Well, is <code
                        class=" font-light bg-indigo-100 px-1 py-0.5 rounded text-indigo-900">very simple</code>. You
                    can rate my job
                    and share it with everybody. If you will have any questions or suggestions about my project, please
                    let me know.</p>
                <code
                    class="text-xl font-light">  Your feedback is welcome <i class="fa-solid fa-exclamation"></i> <i class="fa-regular fa-heart"></i></code>

                <p class="my-8 text-justify  font-light text-gray-400 ">To your right, you can see the feedback form. So
                    read and complete it. It will not take much time. If something is needed or must be improved,
                    please report it below. (In massage section). Thank you for your time and valuable feedback.
                </p>
                <p class="text-justify rounded pl-4  bg-indigo-100 font-light text-indigo-600">
                    You don't have to know about software or technical process <i class="fa-solid fa-exclamation"></i>
                </p>

            </main>
            <aside class="px-4 md:flex-none md:w-3/5">
                <div class="px-4 py-2 mb-2  tracking-wide uppercase bg-orange-200">Give me your feedback <i
                        class="fa-solid fa-exclamation"></i> <i class="fa-solid fa-circle-down"></i></div>
                <div class="flexstart">
                    <div class=" p-6 rounded-lg shadow-lg bg-white w-full">
                        <!-- Random String from covidTracker -->
                        <form method="post" @submit="onSubmit" @submit.prevent>
                            <div class="form-group mb-6">
                                <input type="text" name="_honey" style="display:none">
                                <input type="hidden" name="_captcha" value="false">

                                <table class="text-left font-light">
                                    <thead>
                                        <tr class="font-light">
                                            <th></th>
                                            <th>Amazing</th>
                                            <th>Good</th>
                                            <th>Decent</th>
                                            <th>Disappointing</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="">Rate my web</td>
                                            <td><input type="radio" value="Amazing" name="web" v-model="vote"
                                                    required /></td>
                                            <td><input type="radio" value="Good" name="web" v-model="vote" /></td>
                                            <td><input type="radio" value="Decent" name="web" v-model="vote" /></td>
                                            <td><input type="radio" value="Disappointing" name="web" v-model="vote" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="form-group mb-6">
                                <span class="text-lg font-light">Which word do you identify with?</span>

                                <div class="mt-2  font-light text-gray-700">
                                    <label class="inline-flex items-center">
                                        <input type="radio" class="form-radio" name="accountType"
                                            value="Software Developer" v-model="identity" required>
                                        <span class="ml-2">Software Developer</span>
                                    </label>
                                    <label class="inline-flex items-center ml-6">
                                        <input type="radio" class="form-radio" name="accountType" value="Student"
                                            v-model="identity">
                                        <span class="ml-2">Student</span>
                                    </label>
                                    <label class="inline-flex items-center ml-6">
                                        <input type="radio" class="form-radio" name="accountType" value="Teacher"
                                            v-model="identity">
                                        <span class="ml-2">Teacher</span>
                                    </label>
                                    <label class="inline-flex items-center ml-6">
                                        <input type="radio" class="form-radio" name="accountType" value="Other"
                                            v-model="identity">
                                        <span class="ml-2">Other</span>
                                    </label>
                                </div>
                            </div>
                            <div class="form-group mb-6">
                                <label class="block mt-4 text-gray-700">
                                    <span class="text-black text-lg font-light">How many hours did I invest in the
                                        project (Aprox.)</span>
                                    <select
                                        class="form-select mt-1 block w-full font-light text-gray-600 border border-solid border-gray-300"
                                        name="hours" v-model="hours" required>
                                        <option value="0" selected disabled hidden>Choose here</option>
                                        <option value="<100">less than 100</option>
                                        <option value="100-250"> between 100 and 250</option>
                                        <option value="250-400"> between 250 and 400</option>
                                        <option value=">400">more than +400</option>
                                    </select>
                                </label>
                            </div>
                            <div class="form-group mb-6">
                                <span class="text-black text-lg font-light">Just to have the possibility to contact you
                                </span>
                                <input type="email" name="email"
                                    class="form-control block w-full px-3 py-1.5 font-light text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300       rounded    transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Email address (Not required) " v-model="email" required>
                            </div>
                            <div class="form-group mb-6">
                                <span class="text-black text-lg font-light">How would you suggest I improve it?</span>
                                <textarea v-model="message" name="message"
                                    class="  form-control block  w-full  px-3   py-1.5   font-light   text-gray-700    bg-white bg-clip-padding   border border-solid border-gray-300   rounded transitionease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="exampleFormControlTextarea13" rows="3" placeholder="Message "
                                    required></textarea>
                            </div>
                            <div class="form-group form-check text-center mb-6">
                                <input type="checkbox"
                                    class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                                    id="exampleCheck87" checked>
                                <label class="form-check-label inline-block text-gray-800" for="exampleCheck87">Send me
                                    a copy of this message</label>
                            </div>
                            <button type="submit" class="
      w-full
      px-6
      py-2.5
      bg-indigo-600
      text-white
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-indigo-700 hover:shadow-lg
      focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-indigo-800 active:shadow-lg
      transition
      duration-150
      ease-in-out">Send feedback</button>
                        </form>
                    </div>
                </div>

            </aside>
        </div>

    </div>
</template>

<script >
import { reactive, ref } from 'vue'
export default {
    setup() {
        let errors = ref([]);
        let vote = ref('');
        let email = ref('');
        let identity = ref('');
        let hours = ref('');
        let message = ref('');
        let post = [];

        function checkForm(e) {
            if (this.vote && this.email && this.identity && this.hours && this.message) {
                //console.log('Well done!!!');
                this.post.push(this.vote, this.identity, this.hours, this.email, this.massage);
                console.warn(this.post);
                this.errors = [];
                return true;
            }
            this.errors = [];

            if (!this.vote) {
                this.errors.push('Vote will be of great support.');
            }
            if (!this.identity) {
                this.errors.push('Who you are, makes all easyest');
            }
            if (!this.hours) {
                this.errors.push('El nombre es obligatorio.');
            }
            if (!this.email) {
                this.errors.push('Email will be of great support');
            } else if (!this.validEmail(this.email)) {
                this.errors.push('This is not a valid email.');
            }
            if (!this.message) {
                this.errors.push('Maybe a little massage?');
            }
        }
        function validEmail(email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }

        function onSubmit() {
            console.log('In send prevent');
            /*  todo validate email + errors + message success */
            fetch("https://formsubmit.co/ajax/7a475fa436767b362d917b82ce433969", {
                method: "POST", 
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    vote: this.vote,
                    identity: this.identity, 
                    hours: this.hours,
                    email: this.email,
                    message: this.message,
                    _template: 'table',
                    _subject: 'NO1MORE SUGGESTIONS-TIPS'
                })
            })
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.log(error));
        }

        return { errors, vote, email, identity, hours, message, checkForm, validEmail, post, onSubmit }
    }

}

</script>

<style >
th,
td {
    width: 14%;
    border-bottom: 1px solid #ccc;
    text-align: center;
    vertical-align: unset;
    word-break: break-all;
}
</style>