new Promise((resolveOuter)=>{
    resolveOuter(
        newPromise((resolveInner)=>{
            setTimeout(resolveInner, 2000);
        })
    )
})