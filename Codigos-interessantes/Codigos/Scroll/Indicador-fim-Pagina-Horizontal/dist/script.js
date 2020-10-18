window.addEventListener(
    "scroll",
    () => {
        document.body.style.setProperty(
            "--scroll",
            window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
        );
        document.body.style.setProperty(
            "--scroll-per",
            `${(window.pageYOffset / document.body.offsetHeight) * 100}%`
        );
    },
    false
);