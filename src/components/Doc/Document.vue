<script>
export default {
    mounted(){
        console.log("doc ishga tushdi")
    },
    data() {
        return {
            setMsg: false
        }
    },
    methods: {
        HandleCopy() {
            this.setMsg = !this.setMsg
            setTimeout(() => {
                this.setMsg = !this.setMsg
            }, 3000)
        }
    }
}
</script>

<template>
    <section class="docs-section">
        <h1 class="mt-4 docName">Installation</h1>
        <div class="row">
            <div class="col-12">
                <a href="" class="d-block "><span class="hashtag">#</span> Meet Laravel</a>
                <a href="" class="why"><span class="hashtag">#</span><i>Why Laravel ?</i></a>
            </div>
            <div class="col-sm-11">
                <article class="mt-5">
                    <a href="" class="article-a ">
                        <h1><span class="hashtag">#</span> Meet Laravel</h1>
                    </a>

                    <div class="row">
                        <div class="col-11">
                            <div class="copyCode">
                                <button temp="Copy" class="copy-Btn" @click="HandleCopy"></button>
                                <div v-show="setMsg" class="copyMsg">
                                    <strong>Matindan nusxa ko'chirildi</strong>
                                </div>
                                <pre class="cods">
                        <code >
    return Response::json([
        'error' => false,
        'code'  => 200,
        'message' => 'Image was deleted!'
    ], 200)
                        </code>
                    </pre>
                            </div>
                        </div>
                    </div>

                    <span class="d-block mt-2 p-1 span-Article">
                        Laravel strives to provide an amazing developer experience while providing powerful features
                        such as thorough dependency injection, an expressive database abstraction layer, queues and
                        scheduled jobs, unit and integration testing, and more.
                    </span>
                    <span class="d-block mt-2 p-1 span-Article">
                        Laravel strives to provide an amazing developer experience while providing powerful features
                        such as thorough dependency injection, an expressive database abstraction layer, queues and
                        scheduled jobs, unit and integration testing, and more.
                    </span>
                    <span class="d-block mt-2 p-1 span-Article">
                        Laravel strives to provide an amazing developer experience while providing powerful features
                        such as thorough dependency injection, an expressive database abstraction layer, queues and
                        scheduled jobs, unit and integration testing, and more.
                    </span>
                    <span class="d-block mt-2 p-1 span-Article">
                        Laravel strives to provide an amazing developer experience while providing powerful features
                        such as thorough dependency injection, an expressive database abstraction layer, queues and
                        scheduled jobs, unit and integration testing, and more.
                    </span>
                    <span class="d-block mt-2 p-1 span-Article">
                        Laravel strives to provide an amazing developer experience while providing powerful features
                        such as thorough dependency injection, an expressive database abstraction layer, queues and
                        scheduled jobs, unit and integration testing, and more.
                    </span>
                    <span class="d-block mt-2 p-1 span-Article">
                        Laravel strives to provide an amazing developer experience while providing powerful features
                        such as thorough dependency injection, an expressive database abstraction layer, queues and
                        scheduled jobs, unit and integration testing, and more.
                    </span>
                    <span class="d-block mt-2 p-1 span-Article">
                        Laravel strives to provide an amazing developer experience while providing powerful features
                        such as thorough dependency injection, an expressive database abstraction layer, queues and
                        scheduled jobs, unit and integration testing, and more.
                    </span>
                    <span class="d-block mt-2 p-1 span-Article">
                        Laravel strives to provide an amazing developer experience while providing powerful features
                        such as thorough dependency injection, an expressive database abstraction layer, queues and
                        scheduled jobs, unit and integration testing, and more.
                    </span>
                    <span class="d-block mt-2 p-1 span-Article">
                        Laravel strives to provide an amazing developer experience while providing powerful features
                        such as thorough dependency injection, an expressive database abstraction layer, queues and
                        scheduled jobs, unit and integration testing, and more.
                    </span>
                    <span class="d-block mt-2 p-1 span-Article">
                        Laravel strives to provide an amazing developer experience while providing powerful features
                        such as thorough dependency injection, an expressive database abstraction layer, queues and
                        scheduled jobs, unit and integration testing, and more.
                    </span>
                </article>
            </div>
        </div>
    </section>
</template>
<style  scoped>
.copy-Btn[temp]::before {
    content: attr(temp);
    font-size: 18px;

}

.copyCode {
    position: relative;
}

.copyCode .copyMsg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 8px;

}

.copyCode .copyMsg strong {
    padding: 20px 30px;
    background: #888;
}

.copyCode .copy-Btn {
    width: 60px;
    height: 40px;
    position: absolute;
    right: 0;
    border-radius: 5px;
}

.cods {
    background: #292D3E;
    border-radius: 8px;
}

.docs-section {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    overflow-y: scroll;
}

.docs-section::-webkit-scrollbar {
    width: 10px;
}

.docs-section::-webkit-scrollbar-track {
    float: left;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #0a0909;
}

.docs-section::-webkit-scrollbar-thumb {
    background: #888;
}

.docName {
    font-size: 64px;
}

a {
    color: white;
    font-size: 22px;
    line-height: 40px;
}

.why {
    margin-left: 20px;
}

.article-a h1 {

    font-size: 64px;
}

article p {
    line-height: auto;
    font-size: 22px;
    text-align: start;
}

@media (max-width:1399px) {

    .docName {
        font-size: 40px;
    }

    .docs-section a {
        font-size: 16px;
    }

    .article-a h1 {
        font-size: 46px;
    }

    article span.span-Article {
        font-size: 14px;
        text-align: justify;
    }

    .copy-Btn[temp]::before {
        content: attr(temp);
        width: 50px;
        height: 30px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border-radius: 5px;
        font-size: 16px;

    }

}

@media (max-width:1199px) {
    .docName {
        font-size: 32px;
    }

    .article-a h1 {
        font-size: 36px;
    }

    .copyCode .copyMsg strong {
        padding: 10px 10px;
        background: #888;
    }

    .docs-section article span.span-Article {
        font-size: 13px !important;
    }
}

@media (max-width:991px) {}

@media (max-width:767px) {}

@media (max-width:575px) {}
</style>