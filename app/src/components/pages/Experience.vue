<template>

    <div v-bind:class="{ 'modal-active': modalActive, 'filter-inactive' : !filter }">

        <Modal :modalActive="modalActive" v-on:close_modal="closeModal"  />

        <transition name="fade">

            <div ref="experience" class="o-container c-experience" v-bind:class="{ 'smartbow-deactive': !smartbowActive, 'smartbow-active': smartbowActive }" v-if="!viewActive">

                <h1 class="u-uppercase u-center-align c-experience__h1">
                    
                    <span v-if="smartbowActive">FILTER TO SEE OPPORTUNITIES ON FARMS LIKE YOURS</span>
                    <span v-else>ACTIVATE SMARTBOW TO SEE WHAT IT CAN DO FOR YOU</span>
                    
                </h1>

                <div class="c-btns" v-bind:class="{ 'c-btns--disabled': !smartbowActive }" id="btns">

                    <button class="c-btns__btn" @click="selectFilter('In Heat')" v-bind:class="{ 'c-btns__btn--active': filter === 'In Heat' }" :tabindex="smartbowActive ? '0' : '-1'">
                        
                        <svg aria-hidden="true" class="c-btns__icon" data-name="Group 4741" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58.1 58.1"><g data-name="Path 4014"><path d="M29.05 57.1a28 28 0 01-28-28A28 28 0 0148.88 9.22a28 28 0 016 30.75A28 28 0 0129.05 57.1z" fill="#fff"/><path d="M29.05 2a26.88 26.88 0 00-10.53 2.12 27.17 27.17 0 00-14.4 14.4A27.06 27.06 0 0039.58 54 27 27 0 0056.1 29.05a27 27 0 00-27-27m0-2a29.05 29.05 0 11-29.1 29A29.05 29.05 0 0129.05 0z" fill="#6abf4b"/></g><g data-name="Group 4734"><path data-name="Path 3974" d="M29 56.24A27.25 27.25 0 1156.24 29 27.3 27.3 0 0129 56.24m0-53.15A25.91 25.91 0 1054.9 29 25.91 25.91 0 0029 3.09" fill="#54565b"/><path data-name="Path 3975" d="M34.71 27.07a7.37 7.37 0 00-10 1.66 3.35 3.35 0 001.28.53 6.16 6.16 0 014.6-2.13 6.41 6.41 0 013.42 1 6.09 6.09 0 11-9.51 5 5 5 0 01.64-2.51 7.48 7.48 0 01-1.23-.53 5.89 5.89 0 00-.75 3A7.43 7.43 0 1034.75 27" fill="#54565b"/><path data-name="Path 3976" d="M44.7 28.46h-1.76l3.47 3.95h-9.24v1.34h9.29l-3.52 4h1.76l4.11-4.59z" fill="#54565b"/><path data-name="Path 3977" d="M33.11 29.26a3.51 3.51 0 00-1.28-.53 6.3 6.3 0 01-2.78 1.87h-.21c-.05 0-.22.06-.32.11l-.54.11a1 1 0 00-.37.05h-.8a6.13 6.13 0 01-5-8.76 5.75 5.75 0 011.87-2.25.05.05 0 00.05-.05 5.71 5.71 0 011.6-.8 6.11 6.11 0 018.07 5.77 4.48 4.48 0 01-.59 2.4 4.86 4.86 0 011.23.43 5.11 5.11 0 00.69-2.83 7.41 7.41 0 00-7.39-7.43 7.21 7.21 0 00-4.17 1.29c-.05 0-.11 0-.16.1s-.05.06-.11.06a7.12 7.12 0 00-2.51 3.36c-.05.22-.16.43-.21.64v.2a2.36 2.36 0 00-.11.59v.16c0 .16-.05.26-.05.42h-6.2v-4.52h-1.38v4.48H9.18v1.34h3.26V30h1.33v-4.53h6A7.46 7.46 0 0025.53 32a4.55 4.55 0 00.74.11h.06a4.25 4.25 0 00.8 0 3.21 3.21 0 00.69 0H28c.16 0 .32-.06.53-.06.06 0 .16-.05.22-.05a1.53 1.53 0 01.48-.11c.05 0 .11-.05.16-.05h.16a7.57 7.57 0 003.58-2.52" fill="#6bbe4a"/><path data-name="Path 3978" d="M33 40.27L32.52 39a6.14 6.14 0 003.8-7.75 5.87 5.87 0 00-3.1-3.47 6.1 6.1 0 00-4.65-.27l-.43-1.28a7.19 7.19 0 015.66.37 7.44 7.44 0 01-.8 13.67" fill="#54565b"/></g></svg>
                        Find cows<br> in heat
                        
                    </button>

                    <button class="c-btns__btn" @click="selectFilter('Health Alert')" v-bind:class="{ 'c-btns__btn--active': filter === 'Health Alert' }" :tabindex="smartbowActive ? '0' : '-1'">
                        
                        <svg aria-hidden="true" class="c-btns__icon" data-name="Group 4741" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58.1 58.1"><g data-name="Path 4014"><path d="M29.05 57.1a28 28 0 01-28-28A28 28 0 0148.88 9.22a28 28 0 016 30.75A28 28 0 0129.05 57.1z" fill="#fff"/><path d="M29.05 2a26.88 26.88 0 00-10.53 2.12 27.17 27.17 0 00-14.4 14.4A27.06 27.06 0 0039.58 54 27 27 0 0056.1 29.05a27 27 0 00-27-27m0-2a29.05 29.05 0 11-29.1 29A29.05 29.05 0 0129.05 0z" fill="#6abf4b"/></g><g data-name="Group 4734"><path data-name="Path 3974" d="M29 56.24A27.25 27.25 0 1156.24 29 27.3 27.3 0 0129 56.24m0-53.15A25.91 25.91 0 1054.9 29 25.91 25.91 0 0029 3.09" fill="#54565b"/><path data-name="Path 3975" d="M34.71 27.07a7.37 7.37 0 00-10 1.66 3.35 3.35 0 001.28.53 6.16 6.16 0 014.6-2.13 6.41 6.41 0 013.42 1 6.09 6.09 0 11-9.51 5 5 5 0 01.64-2.51 7.48 7.48 0 01-1.23-.53 5.89 5.89 0 00-.75 3A7.43 7.43 0 1034.75 27" fill="#54565b"/><path data-name="Path 3976" d="M44.7 28.46h-1.76l3.47 3.95h-9.24v1.34h9.29l-3.52 4h1.76l4.11-4.59z" fill="#54565b"/><path data-name="Path 3977" d="M33.11 29.26a3.51 3.51 0 00-1.28-.53 6.3 6.3 0 01-2.78 1.87h-.21c-.05 0-.22.06-.32.11l-.54.11a1 1 0 00-.37.05h-.8a6.13 6.13 0 01-5-8.76 5.75 5.75 0 011.87-2.25.05.05 0 00.05-.05 5.71 5.71 0 011.6-.8 6.11 6.11 0 018.07 5.77 4.48 4.48 0 01-.59 2.4 4.86 4.86 0 011.23.43 5.11 5.11 0 00.69-2.83 7.41 7.41 0 00-7.39-7.43 7.21 7.21 0 00-4.17 1.29c-.05 0-.11 0-.16.1s-.05.06-.11.06a7.12 7.12 0 00-2.51 3.36c-.05.22-.16.43-.21.64v.2a2.36 2.36 0 00-.11.59v.16c0 .16-.05.26-.05.42h-6.2v-4.52h-1.38v4.48H9.18v1.34h3.26V30h1.33v-4.53h6A7.46 7.46 0 0025.53 32a4.55 4.55 0 00.74.11h.06a4.25 4.25 0 00.8 0 3.21 3.21 0 00.69 0H28c.16 0 .32-.06.53-.06.06 0 .16-.05.22-.05a1.53 1.53 0 01.48-.11c.05 0 .11-.05.16-.05h.16a7.57 7.57 0 003.58-2.52" fill="#6bbe4a"/><path data-name="Path 3978" d="M33 40.27L32.52 39a6.14 6.14 0 003.8-7.75 5.87 5.87 0 00-3.1-3.47 6.1 6.1 0 00-4.65-.27l-.43-1.28a7.19 7.19 0 015.66.37 7.44 7.44 0 01-.8 13.67" fill="#54565b"/></g></svg>
                        FIND COWS WITH<br> HEALTH PROBLEMS
                        
                    </button>

                    <button class="c-btns__btn" @click="selectFilter('Find Cow')" v-bind:class="{ 'c-btns__btn--active': filter === 'Find Cow' }" :tabindex="smartbowActive ? '0' : '-1'">
                        
                        <svg aria-hidden="true" class="c-btns__icon" data-name="Group 4741" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58.1 58.1"><g data-name="Path 4014"><path d="M29.05 57.1a28 28 0 01-28-28A28 28 0 0148.88 9.22a28 28 0 016 30.75A28 28 0 0129.05 57.1z" fill="#fff"/><path d="M29.05 2a26.88 26.88 0 00-10.53 2.12 27.17 27.17 0 00-14.4 14.4A27.06 27.06 0 0039.58 54 27 27 0 0056.1 29.05a27 27 0 00-27-27m0-2a29.05 29.05 0 11-29.1 29A29.05 29.05 0 0129.05 0z" fill="#6abf4b"/></g><g data-name="Group 4734"><path data-name="Path 3974" d="M29 56.24A27.25 27.25 0 1156.24 29 27.3 27.3 0 0129 56.24m0-53.15A25.91 25.91 0 1054.9 29 25.91 25.91 0 0029 3.09" fill="#54565b"/><path data-name="Path 3975" d="M34.71 27.07a7.37 7.37 0 00-10 1.66 3.35 3.35 0 001.28.53 6.16 6.16 0 014.6-2.13 6.41 6.41 0 013.42 1 6.09 6.09 0 11-9.51 5 5 5 0 01.64-2.51 7.48 7.48 0 01-1.23-.53 5.89 5.89 0 00-.75 3A7.43 7.43 0 1034.75 27" fill="#54565b"/><path data-name="Path 3976" d="M44.7 28.46h-1.76l3.47 3.95h-9.24v1.34h9.29l-3.52 4h1.76l4.11-4.59z" fill="#54565b"/><path data-name="Path 3977" d="M33.11 29.26a3.51 3.51 0 00-1.28-.53 6.3 6.3 0 01-2.78 1.87h-.21c-.05 0-.22.06-.32.11l-.54.11a1 1 0 00-.37.05h-.8a6.13 6.13 0 01-5-8.76 5.75 5.75 0 011.87-2.25.05.05 0 00.05-.05 5.71 5.71 0 011.6-.8 6.11 6.11 0 018.07 5.77 4.48 4.48 0 01-.59 2.4 4.86 4.86 0 011.23.43 5.11 5.11 0 00.69-2.83 7.41 7.41 0 00-7.39-7.43 7.21 7.21 0 00-4.17 1.29c-.05 0-.11 0-.16.1s-.05.06-.11.06a7.12 7.12 0 00-2.51 3.36c-.05.22-.16.43-.21.64v.2a2.36 2.36 0 00-.11.59v.16c0 .16-.05.26-.05.42h-6.2v-4.52h-1.38v4.48H9.18v1.34h3.26V30h1.33v-4.53h6A7.46 7.46 0 0025.53 32a4.55 4.55 0 00.74.11h.06a4.25 4.25 0 00.8 0 3.21 3.21 0 00.69 0H28c.16 0 .32-.06.53-.06.06 0 .16-.05.22-.05a1.53 1.53 0 01.48-.11c.05 0 .11-.05.16-.05h.16a7.57 7.57 0 003.58-2.52" fill="#6bbe4a"/><path data-name="Path 3978" d="M33 40.27L32.52 39a6.14 6.14 0 003.8-7.75 5.87 5.87 0 00-3.1-3.47 6.1 6.1 0 00-4.65-.27l-.43-1.28a7.19 7.19 0 015.66.37 7.44 7.44 0 01-.8 13.67" fill="#54565b"/></g></svg>
                        LOCATE SPECIFIC<br> COWS IMMEDIATELY
                        
                    </button>

                </div>

                <div class="c-cows o-container">

                    <Cow :filter="filter" :data="item" :index="index" :tooltip="!smartbowActive" v-for="(item, index) in cows" v-bind:key="index" v-on:select_cow="selectCow" />

                </div>

            </div>

        </transition>

        <transition name="fade">

            <div class="o-container c-view" v-if="viewActive">

                <button class="c-view__btn" @click="backToHerd">
                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="11.889" height="23.255"><path data-name="Path 4009" d="M11.886 11.539a1.292 1.292 0 00-.331-.775L2.255.429A1.292 1.292 0 10.333 2.157l8.527 9.471-8.527 9.471a1.292 1.292 0 001.922 1.728l9.3-10.335a1.292 1.292 0 00.331-.953z" fill="#fff"/></svg>
                    Back to herd

                </button>

                <div class="c-view__cow">

                    <button class="e-arrow e-arrow--left" @click="slideLeft" aria-label="Slide right" v-if="sliderdata.length !== 1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.889 23.255"><path data-name="Path 4009" d="M11.886 11.539a1.292 1.292 0 00-.331-.775L2.255.429A1.292 1.292 0 10.333 2.157l8.527 9.471-8.527 9.471a1.292 1.292 0 001.922 1.728l9.3-10.335a1.292 1.292 0 00.331-.953z" fill="#fff"/></svg>
                    </button>

                    <button class="e-arrow e-arrow--right" @click="slideRight" aria-label="Slide left" v-if="sliderdata.length !== 1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.889 23.255"><path data-name="Path 4009" d="M11.886 11.539a1.292 1.292 0 00-.331-.775L2.255.429A1.292 1.292 0 10.333 2.157l8.527 9.471-8.527 9.471a1.292 1.292 0 001.922 1.728l9.3-10.335a1.292 1.292 0 00.331-.953z" fill="#fff"/></svg>
                    </button>

                    <div>

                        <p>ID #{{sliderdata[activeCow].id}}</p>

                        <svg class="c-view__cow-img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 94.54 67.24"><path data-name="Path 4028" d="M88.7 11.31c-1.71-1.75-3.71-3.72-5.34-5.64-2-2.44-6.06-1.79-8.32-1.17a6.64 6.64 0 00-2.16-3 8 8 0 00-6.5-1.3 2 2 0 00-1.24 1c-.78 1.33-.46 4-.06 5.38a5.72 5.72 0 002.46 3.21 6.55 6.55 0 01-2.77 1.17c-7.55.57-23.12.67-33.42.73-4.8 0-8.58.06-10.32.12-5.72.2-10 1.84-12.86 4.9a12 12 0 00-1.46 1.94C3.12 21.89-1.21 29.62.37 39.14c.18 1 .34 2 .5 2.91C2.25 50 2.53 52.39-.01 54.84L2.05 57c3.76-3.64 3.08-7.58 1.73-15.41-.16-.9-.32-1.87-.5-2.9A21.4 21.4 0 014.6 27v.81a67.92 67.92 0 003.33 17.05 171.49 171.49 0 01-.05 20.53A1.48 1.48 0 009.24 67h6.4a1.48 1.48 0 001.48-1.41l.08-2.21h4.47a1.48 1.48 0 001.48-1.46l.33-12.68a6.08 6.08 0 001 .88 10.4 10.4 0 001.35.83s-.51 1.35-.84 2.05.33 1 1 1.52a1.47 1.47 0 001.88-.3 24.81 24.81 0 001.48-2.47h1.94s.23 1.71.3 2.63 1 1.15 1.75 1.15c.88 0 1.28-.2 1.28-1.22s.13-2.46.13-2.46a5.1 5.1 0 001.51-.27 5.74 5.74 0 002-.85l-4-2.5s-.33.4-1.84.59a9.91 9.91 0 01-5.43-1.16 13.61 13.61 0 01-3.85-2.93l.06-3.21a13.84 13.84 0 014 .67 17.16 17.16 0 015.46 2.38c4.22 3 8.88 7.36 19.27 6.43 3.22-.29 7.43-.21 9.09 1.15a1.72 1.72 0 01.71 1.3c.34 4.27.78 12.31.79 12.39a1.47 1.47 0 001.47 1.4h4.69a1.47 1.47 0 001.47-1.47v-1.68c-.16-2.76-.16-5.62-.16-8.45v-.9-2.82a16.94 16.94 0 01.65-4.18c.3-1 .7-2.12 1.12-3.27.92-2.5 1.88-5.09 1.75-7.33a31.26 31.26 0 00-1.33-6.5 2.55 2.55 0 01.19-1.95l.6-1.05c1.38-2.29 2.15-2.7 2.31-2.76 1.39.05 11.23.44 13.81.22s4.87-4 5.29-5.09c.86-2.21-1.74-4.8-5.68-8.7zM20.22 60.39h-2.9l.56-17a6.36 6.36 0 012.51-1.49zm68.59-38.24c-2 .18-9.77-.08-13.58-.23h-.15c-1.49.09-2.94 1.38-4.57 4a34.36 34.36 0 00-1.72 3.28 36.31 36.31 0 012 8.09c.1 1.66-.76 4-1.58 6.22-.42 1.14-.86 2.33-1.19 3.46a23.11 23.11 0 00-.74 7.45v.47l-.06 9.39h-1.86c-.14-2.52-.46-7.85-.71-11.08a4.75 4.75 0 00-1.79-3.34c-3.16-2.58-9.45-2.17-11.31-2-8.69.93-13-3.19-17.48-6.2a20 20 0 00-5.38-2.45c-9.37-3-13.3 2.32-13.46 2.54a1.42 1.42 0 00-.27.8L14.22 64h-3.3a179.57 179.57 0 000-19.55 1.44 1.44 0 00-.09-.4 66 66 0 01-3.26-16.39 13.62 13.62 0 011.42-7.15.18.18 0 00.07-.05 10 10 0 011.28-1.76c2.26-2.46 5.89-3.79 10.79-4 1.7-.06 5.47-.08 10.23-.11 10.35-.07 26-.16 33.63-.74 3-.22 6-3 6.34-3.35a1.48 1.48 0 00-.64-2.5s-2.33-.67-2.77-2.27A8.36 8.36 0 0167.63 3a5 5 0 013.47.88 4.33 4.33 0 011.45 2.67 1.44 1.44 0 00.7 1.11 1.46 1.46 0 001.3.12c2-.79 5.54-1.4 6.55-.2 1.69 2 3.73 4.05 5.53 5.84 2 2 4.68 4.65 4.94 5.64-.52 1.15-2.1 3-2.76 3.12z" fill="#fff"/></svg>

                    </div>

                </div>

                <div class="c-view__content">

                    <div v-if="filter">
                    
                        <p class="c-view__selection">Selection  |  {{filter}}</p>

                    </div>

                    <div v-if="filter === null">
                    
                        <p class="c-view__selection">Selection  |  All</p>

                    </div> 

                    <h2 class="c-view__title">{{sliderdata[activeCow].title}}</h2>
                    <span class="c-view__text" v-html="sliderdata[activeCow].content"></span>

                </div>

            </div>

        </transition>

        <ActivateBtn :smartbowActive="smartbowActive" :viewActive="viewActive" v-on:activate_smartbow="activateSmartbow" />
    
        <a class="e-btn" href="http://general.dev.steinias.com/pages/zoetis/zoetis-18605/">
            Discover more about SMARTBOW
            <svg xmlns="http://www.w3.org/2000/svg" width="11.889" height="23.255"><path data-name="Path 4009" d="M11.886 11.539a1.292 1.292 0 00-.331-.775L2.255.429A1.292 1.292 0 10.333 2.157l8.527 9.471-8.527 9.471a1.292 1.292 0 001.922 1.728l9.3-10.335a1.292 1.292 0 00.331-.953z" fill="#fff"/></svg>
        </a>
    
    </div>

</template>

<script>

import {trapFocus} from '../../utils';

import Cow from '../ui/Cow';
import Modal from '../ui/Modal';
import ActivateBtn from '../ui/ActivateBtn';

export default {
    data() {
        return {
            modalActive: true,
            smartbowActive: false,
            viewActive: false,
            filter: null,
            activeCow: null,
            cows: [
                {
                    id: 1,
                    filter: [],
                },
                {
                    id: 2,
                    tooltip: 'Heat detection is a time-consuming task. Using tail chalk, you have to check the chalk and reapply it every day. Using visual inspection, you have to spend time observing cows for signs of heat multiple times a day.',
                    filter: ['In Heat'],
                    title: 'Yes, she is in heat',
                    content: '<p>Before SMARTBOW, heat detection was a time-consuming task. If you were using tail chalk, you had to check the chalk and reapply it every day. If you were relying on visual inspection, you had to spend time observing cows for signs of heat multiple times a day. Perhaps you were struggling to find skilled team members to do this important job?</p><p>With SMARTBOW, all that time spent tail chalking and observing is a thing of the past. You can spend more time with your family, or focused on other jobs, confident that SMARTBOW will alert you when your cows are in heat.</p><p>Learn more about how SMARTBOW works at <a href="http://www.smartbow.com">smartbow.com</a>.</p>'
                },
                {
                    id: 3,
                    filter: [],
                },
                {
                    id: 4,
                    filter: [],
                },
                {
                    id: 5,
                    tooltip: 'Finding specific cows within your herd for insemination or examination can be time consuming and frustrating, like finding a needle in a haystack. Or it requires you to keep cows locked up or separated from the main herd.',
                    filter: ['Find Cow'],
                    title: 'Find cows quickly - no more searching',
                    content: '<p>Before SMARTBOW, finding specific cows within your herd for insemination or examination could be time consuming and frustrating, like finding a needle in a haystack. Or it required you to keep cows locked up or separated from the main herd. This led to disrupted eating and resting and could impact cow comfort and overall productivity.</p><p>SMARTBOW’s unique and highly accurate localization feature reduces the time you spend searching for cows down to a few seconds. Now, you know in real time where every cow on your farm is – even if they’ve accidentally been put in the wrong pen. That means less time searching and more time for other things – like dinner with your family.</p><p>Learn more about how SMARTBOW works at <a href="http://www.smartbow.com">smartbow.com</a>.</p>'
                },
                {
                    id: 6,
                    filter: [],
                },
                {
                    id: 7,
                    filter: [],
                },
                {
                    id: 8,
                    filter: [],
                },
                {
                    id: 9,
                    filter: [],
                },
                {
                    id: 10,
                    filter: [],
                },
                {
                    id: 11,
                    filter: [],
                },
                {
                    id: 12,
                    filter: [],
                },
                {
                    id: 13,
                    tooltip: 'Detecting early signs of illness in your herd can be difficult. And when you miss early warning signs, illness can affect welfare, impact productivity and require a longer period of treatment.',
                    filter: ['Health Alert'],
                    title: 'Early detection. Better outcomes.',
                    content: '<p>Before SMARTBOW, detecting early signs of illness in your herd could be difficult. And when you miss early warning signs, illness can affect welfare, impact productivity and require a longer period of treatment.</p><p>With SMARTBOW, even when you and your team can’t be with your cows, the system is constantly monitoring their rumination and activity levels and sending you alerts if anything changes – indicating illness – before you could possibly see any physical signs. Early detection allows you and your veterinarian to intervene quickly and can lead to better outcomes – for the cow and for you.</p><p>Learn more about how SMARTBOW works at <a href="http://www.smartbow.com">smartbow.com</a>.</p>'
                },
                {
                    id: 14,
                    filter: [],
                },
                {
                    id: 15,
                    filter: [],
                },
                {
                    id: 16,
                    tooltip: 'You might not identify every cow with a potential health issue. And, if there is a list of cows that require your vet’s attention, you might both spend time trying to find those cows in the herd.',
                    filter: ['Health Alert', 'Find Cow'],
                    title: 'Early warning signs',
                    content: '<p>Before SMARTBOW, you might not have identified every cow with a potential health issue. And, if there were a list of cows that required your vet’s attention, you’d both spend time trying to find those cows in the herd. Or you might have to keep them separated after morning milking, disrupting their routine, while waiting for the vet to arrive.</p><p>With SMARTBOW, you can use the health alerts to create an accurate list of cows that need attention – often before physical signs of illness can be detected – and SMARTBOW’s unique localization feature to quickly and easily find those specific cows. No more searching.</p><p>Learn more about how SMARTBOW works at <a href="http://www.smartbow.com">smartbow.com</a>.</p>'
                },
                {
                    id: 17,
                    filter: [],
                },
                {
                    id: 18,
                    tooltip: 'When inseminating cows, you really only have a short window after thawing the straws in which to get the job done, or you can risk affecting conception rates. You might miss this window while searching for the specific cows that are due for insemination.',
                    filter: ['In Heat', 'Find Cow'],
                    title: 'CATCH THE INSEMINATION WINDOW',
                    content: '<p>When inseminating cows, you really only have a short window after thawing the straws in which to get the job done, or you can risk affecting conception rates. Before SMARTBOW, you might have missed this window while searching for the specific cows that were due for insemination.</p><p>SMARTBOW does the looking for you. SMARTBOW detects signs of heat, advises on the ideal insemination window AND tracks your cows’ location in real time. This makes the process of insemination accurate, fast and may even improve conception rates.</p><p>Learn more about how SMARTBOW works at <a href="http://www.smartbow.com">smartbow.com</a>.</p>'
                },
                {
                    id: 19,
                    filter: [],
                },
                {
                    id: 20,
                    filter: [],
                },
                {
                    id: 21,
                    filter: [],
                },
                {
                    id: 22,
                    filter: [],
                },
                {
                    id: 23,
                    filter: [],
                },
                {
                    id: 24,
                    filter: [],
                },
                {
                    id: 25,
                    filter: [],
                },
                {
                    id: 26,
                    filter: [],
                },
                {
                    id: 27,
                    filter: [],
                },
                {
                    id: 28,
                    filter: [],
                },
                {
                    id: 29,
                    filter: [],
                },
                {
                    id: 30,
                    filter: [],
                },
            ]
        }
    },
    components: {
        Cow,
        Modal,
        ActivateBtn
    },
    mounted() {
        window.addEventListener("keyup", (e) => {
            if(!this.viewActive) return;
            if(e.keyCode==37) this.slideLeft();
            if(e.keyCode==39) this.slideRight();
            if(e.keyCode==27) this.backToHerd();
        });
        trapFocus(document.getElementById('modal'));
    },
    computed: {
        sliderdata() {
            if(this.filter) {
                const arr = this.cows.filter((c) => { 
                    if(c.filter) {
                        if(c.filter.indexOf(this.filter) > -1) {
                            return c;
                        }
                    }
                });
                console.log(arr);
                return arr;
            } else {
                return this.cows.filter(c => c.filter.length);
            }
        }
    },
    methods: {
        findIndex(id) {
            var index = null;
            this.sliderdata.some((e, i) => {
                if (e.id == id) {
                    index = i;
                    return true;
                }
            });
            return index;
        },
        slideLeft() {
            const index = this.findIndex(this.sliderdata[this.activeCow].id);
            if(this.sliderdata[index -1 ]) this.activeCow = this.activeCow - 1;
            else this.activeCow = this.sliderdata.length - 1;
        },
        slideRight() {
            const index = this.findIndex(this.sliderdata[this.activeCow].id);
            if(this.sliderdata[index + 1]) this.activeCow = index + 1;
            else this.activeCow = 0;
        },
        selectCow(id) {
            if(!this.smartbowActive) return;
            this.activeCow = this.findIndex(id);
            this.viewActive = !this.viewActive;
            if(this.viewActive) trapFocus(document.getElementById('view'));
        },
        backToHerd() {
            this.viewActive = !this.viewActive;
        },
        selectFilter(type) {

            if(type === this.filter) {
                this.filter = null;
                document.getElementById('alert').innerHTML = 'Filters deactivated';
            } 
            else {
                document.getElementById('alert').innerHTML = `${type} filter activated`;
                this.filter = type;
            }
        },
        closeModal() {
            document.documentElement.classList.remove('fixed');
            this.modalActive = false;
        },
        activateSmartbow() {
            this.smartbowActive = !this.smartbowActive;
            
            //const activateText = document.querySelector('.c-activate__text');
            if(this.smartbowActive) {
                document.getElementById('alert').innerHTML = 'Smartbow is activated';
                //this.filter = 'health';
            } 
            else {
                this.filter = null;
                document.getElementById('alert').innerHTML = 'Smartbow is decativated';
            } 
        }
    }
}

</script>

<style lang="scss" scoped>

    .c-experience {
        padding: 1rem 0 190px;
        position: relative;
        z-index: 10;

        @include breakpoint(medium) {
            padding: 0 0 235px;
        }

        &__h1 {
            font-size: 1.3rem;

            @include breakpoint(medium) {
                font-size: 2rem;
            }

            @include breakpoint(large) {
                font-size: 2.5rem;
            }
        }
    }

    .c-view {
        align-items: flex-start;
        display: flex;
        flex-basis: 100%;
        justify-content: flex-end;
        left: 0;
        margin: 0 auto;
        position: absolute;
        right: 0;
        top: 257px;

        @include breakpoint(medium) {
            top: 275px;
        }

        &__btn {
            align-items: center;
            border: 1px solid white;
            color: white;
            display: inline-flex;
            font-size: 0.9rem;
            left: 10px;
            line-height: 1;
            padding: 0.5rem;
            position: absolute;
            text-decoration: none;
            text-transform: uppercase;
            top: -74px;
            transition: background-color 0.3s, border-color 0.3s;

            @include breakpoint(medium) {
                font-size: 1.2rem;
                padding: 1rem;
            }

            @include breakpoint(large) {
                left: -80px;
            }
            
            &:hover,
            &:focus {
                border-color: #3C9432;
                color: #3C9432;

                svg {
                    path {
                        fill: #3C9432;
                    }
                }
            }

            svg {
                margin-right: 0.5rem;
                transform: rotate(180deg);
            }
        }

        &__cow {
            align-items: center;
            background: #67C143;
            bottom: 53px;
            display: flex;
            justify-content: center;
            left: 0;
            padding: 5px 0;
            position: fixed;
            width: 100%;

            @include breakpoint(medium) {
                bottom: auto;
                border-radius: 100%;
                height: 500px;
                padding: 0;
                position: absolute;
                width: 500px;
            }

            p {
                margin-bottom: 0;
                text-align: center;

                @include breakpoint(medium) {
                    font-size: 1.5rem;
                }
            }

            .e-arrow {
                outline-color: white;
                position: absolute;
                width: 11px;

                @include breakpoint(medium) {
                    top: auto;
                }

                &--right {
                    right: 20px;
                }

                &--left {
                    left: 20px;
                    transform: rotate(-180deg);
                }
            }
        }

        &__cow-img {
            width: 50px;

            @include breakpoint(medium) {
                width: 250px;
            } 
        }

        &__content {
            background-color: rgba(0,0,0,0.7);
            border: 5px solid #6ABF4B;
            margin-bottom: 150px;
            padding: 1rem;
            width: 100%;

            @include breakpoint(medium) {
                margin-left: 450px;
                min-height: 400px;
                padding: 2rem;
                padding-left: 3rem;
            }
        }

        &__selection {
            color: #707070;
            text-transform: uppercase;

            @include breakpoint(medium) {
                font-size: 1.2rem;
            }
        }

        &__title {
            font-size: 1.3rem;

            @include breakpoint(medium) {
                font-size: 2rem;
            }
        }

        &__text {
            
        }

        &__filter {

            &:before {
                display: inline-block;
                content: ",";
                padding-right: 0.2rem;
            }

            &:first-child {
                margin-left: 0;

                &:before {
                    display: none;
                }
            }
        }
    }

    .c-cows {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        position: relative;
        z-index: 9;
    }

    .c-btns {
        position: relative;
        text-align: center;
        z-index: 12;

        @include breakpoint(medium) {
            margin-bottom: 1rem;
        }

        &__btn {
            align-items: center;
            background-color: rgba(0,0,0,0.64);
            border: 2px solid #6ABF4B;
            color: #6ABF4B;
            display: inline-flex;
            font-size: 0.75rem;
            line-height: 1;
            margin: 0 0.1rem 1rem;
            opacity: 1;
            padding: 0.4rem;
            text-align: center;
            text-transform: uppercase;
            transition: 0.3s opacity 0.3s background-color 0.3s color;

            @include breakpoint(400px) {
                font-size: 0.9rem;
                margin: 0 0.2rem 1rem;
            }

            @include breakpoint(600px) {
                text-align: left;
            }

            @include breakpoint(medium) {
                font-size: 1.2rem;
                margin: 0 0.3rem 1rem;
            }

            @include breakpoint(large) {
                min-width: 185px;
            }

            &--active {
                background-color: #6ABF4B;
                color: white;
            }

            .c-btns--disabled & {
                opacity: .25;
                pointer-events: none;
            }
        }

        &__icon {
            display: none;
            height: 30px;
            margin-right: 0.2rem;
            width: 30px;

            @include breakpoint(600px) {
                display: inline-block;
                height: 40px;
                margin-right: 0.5rem;
                width: 40px;
            }
        }
    }

    .c-btns,
    .c-modal:before,
    .c-modal__box,
    .c-activate,
    .c-cows,
    .c-experience__h1 {
        opacity: 0;
        transition: opacity 0.5s;

        .animate-experience & {
            opacity: 1;
        }
    }

    .c-experience__h1 {
        transition-delay: 0s;
    }

    .c-btns {
        transition-delay: 0.3s;
    }

    .c-cows {
        transition-delay: 0.6s;
    }

    .c-activate {
        transition-delay: 0.9s;
    }

    .c-modal:before,
    .c-modal__box {

        .modal-active & {
            transition-delay: 1.2s;
        }
    }

    .e-btn {
        background: black;
        bottom: 112px;
        font-size: 0.9rem;
        justify-content: center;
        left: 0;
        padding: 0.8rem;
        position: fixed;
        text-transform: none;
        width: 100%;
        z-index: 11;

        svg {
            display: none;
        }

        @include breakpoint(medium) {
            background: #6ABF4B;
            bottom: calc(70px + 1rem);
            left: auto;
            right: 1rem;
            text-decoration: none;
            width: auto;
        }

        @include breakpoint(large) {

            svg {
                display: inline-block;
            }
        }
    }

</style>
