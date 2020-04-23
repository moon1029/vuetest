<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>        <input type="checkbox" id="test" class="test">
<label for="test"></label></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><input type="checkbox"></td>
                </tr>
            </tbody>
        </table>

    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.check {
    visibility: hidden;
}
 .check +label{
        width: 18px;
        height: 18px;
        background-color: #0085d0;
        display: block;
        position: relative;
        border-radius: 2px;
        cursor: pointer;
        overflow: hidden;
    }
    .check:checked {
        content: "√";       /*这里设置选中之后的显示内容*/
        width: 18px;
        height: 18px;
        display: block;
        color: #ffffff;
        text-align: center;
        font-weight: bolder;
        line-height: 18px;
    }

     #test{
        visibility: hidden;
    }

    #test +label{
        width: 18px;
        height: 18px;
        background-color: #c07721;
        display: block;
        position: relative;
        top: -18px;
        left: -2px;
        border-radius: 4px;
        cursor: pointer;
        overflow: hidden;
    }

    #test:checked +label:before{
        content: "√";       /*这里设置选中之后的显示内容*/
        width: 18px;
        height: 18px;
        display: block;
        color: #ffffff;
        text-align: center;
        font-weight: bolder;
        line-height: 18px;
    }
</style>