function firstPage(numCount, columnsCounts, pageCount, pageNum, blockTable, preSpan, firstSpan, nextSpan, lastSpan, pageNumSpan, currPageSpan) {
    hide(numCount, blockTable);
    var currPageNum = 1;
    showCurrPage(currPageSpan,currPageNum);
    showTotalPage(pageNumSpan,pageNum);
    for (i = 0; i < pageCount; i++) {
        blockTable.rows[i].style.display = "";
    }

    firstText(firstSpan);
    preText(preSpan);
    if (pageNum != 1) {
        nextLink(currPageNum, numCount, columnsCounts, pageCount, pageNum, blockTable, preSpan, firstSpan, nextSpan, lastSpan, pageNumSpan, currPageSpan);
    }
    else {
        nextText;
    }
    lastLink(numCount, columnsCounts, pageCount, pageNum, blockTable, preSpan, firstSpan, nextSpan, lastSpan, pageNumSpan, currPageSpan);
}

function prePage(currPageNum, numCount, columnsCounts, pageCount, pageNum, blockTable, preSpan, firstSpan, nextSpan, lastSpan, pageNumSpan, currPageSpan) {
    hide(numCount, blockTable);
    currPageNum--;
    showCurrPage(currPageSpan,currPageNum);
    showTotalPage(pageNumSpan,pageNum);
    var firstR = firstRow(currPageNum, pageCount);
    var lastR = lastRow(firstR);
    for (i = firstR - 1; i < lastR - 1; i++) {
        blockTable.rows[i].style.display = "";
    }

    if (1 == currPageNum) {
        firstText(firstSpan);
        preText(preSpan);
        nextLink(currPageNum, numCount, columnsCounts, pageCount, pageNum, blockTable, preSpan, firstSpan, nextSpan, lastSpan, pageNumSpan, currPageSpan);
        lastLink(numCount, columnsCounts, pageCount, pageNum, blockTable, preSpan, firstSpan, nextSpan, lastSpan, pageNumSpan, currPageSpan);
    } else if (pageNum == currPageNum) {
        preLink(currPageNum, numCount, columnsCounts, pageCount, pageNum, blockTable, preSpan, firstSpan, nextSpan, lastSpan, pageNumSpan, currPageSpan);
        firstLink(numCount, columnsCounts, pageCount, pageNum, blockTable, preSpan, firstSpan, nextSpan, lastSpan, pageNumSpan, currPageSpan);
        nextText(nextSpan);
        lastText(lastSpan);
    } else {
        firstLink(numCount, columnsCounts, pageCount, pageNum, blockTable, preSpan, firstSpan, nextSpan, lastSpan, pageNumSpan, currPageSpan);
        preLink(currPageNum, numCount, columnsCounts, pageCount, pageNum, blockTable, preSpan, firstSpan, nextSpan, lastSpan, pageNumSpan, currPageSpan);
        nextLink(currPageNum, numCount, columnsCounts, pageCount, pageNum, blockTable, preSpan, firstSpan, nextSpan, lastSpan, pageNumSpan, currPageSpan);
        lastLink(numCount, columnsCounts, pageCount, pageNum, blockTable, preSpan, firstSpan, nextSpan, lastSpan, pageNumSpan, currPageSpan);
    }

}

function nextPage(currPageNum, numCount, columnsCounts, pageCount, pageNum, blockTable, preSpan, firstSpan, nextSpan, lastSpan, pageNumSpan, currPageSpan) {
    hide(numCount, blockTable);
    currPageNum++;
    showCurrPage(currPageSpan,currPageNum);
    showTotalPage(pageNumSpan,pageNum);
    var firstR = firstRow(currPageNum);
    var lastR = lastRow(firstR);
    for (i = firstR - 1; i < lastR - 1; i++) {
        blockTable.rows[i].style.display = "";
    }

    if (1 == currPageNum) {
        firstText(firstSpan);
        preText(preSpan);
        nextLink(currPageNum, numCount, columnsCounts, pageCount, pageNum, blockTable, preSpan, firstSpan, nextSpan, lastSpan, pageNumSpan, currPageSpan);
        lastLink(numCount, columnsCounts, pageCount, pageNum, blockTable, preSpan, firstSpan, nextSpan, lastSpan, pageNumSpan, currPageSpan);
    } else if (pageNum == currPageNum) {
        preLink(currPageNum, numCount, columnsCounts, pageCount, pageNum, blockTable, preSpan, firstSpan, nextSpan, lastSpan, pageNumSpan, currPageSpan);
        firstLink(numCount, columnsCounts, pageCount, pageNum, blockTable, preSpan, firstSpan, nextSpan, lastSpan, pageNumSpan, currPageSpan);
        nextText(nextSpan);
        lastText(lastSpan);
    } else {
        firstLink(numCount, columnsCounts, pageCount, pageNum, blockTable, preSpan, firstSpan, nextSpan, lastSpan, pageNumSpan, currPageSpan);
        preLink(currPageNum, numCount, columnsCounts, pageCount, pageNum, blockTable, preSpan, firstSpan, nextSpan, lastSpan, pageNumSpan, currPageSpan);
        nextLink(currPageNum, numCount, columnsCounts, pageCount, pageNum, blockTable, preSpan, firstSpan, nextSpan, lastSpan, pageNumSpan, currPageSpan);
        lastLink(numCount, columnsCounts, pageCount, pageNum, blockTable, preSpan, firstSpan, nextSpan, lastSpan, pageNumSpan, currPageSpan);
    }
}

function lastPage(numCount, columnsCounts, pageCount, pageNum, blockTable, preSpan, firstSpan, nextSpan, lastSpan, pageNumSpan, currPageSpan) {
    hide(numCount, blockTable);
    var currPageNum = pageNum;
    showCurrPage(currPageSpan,currPageNum);
    showTotalPage(pageNumSpan,pageNum);
    var firstR = firstRow(currPageNum);
    for (i = firstR - 1; i < numCount; i++) {
        blockTable.rows[i].style.display = "";
    }

    firstLink(numCount, columnsCounts, pageCount, pageNum, blockTable, preSpan, firstSpan, nextSpan, lastSpan, pageNumSpan, currPageSpan);
    if (currPageNum != 1) {
        preLink(currPageNum, numCount, columnsCounts, pageCount, pageNum, blockTable, preSpan, firstSpan, nextSpan, lastSpan, pageNumSpan, currPageSpan);
    }
    else {
        preText(preSpan);
    }
    nextText(nextSpan);
    lastText(lastSpan);
}



// 计算将要显示的页面的首行和尾行
function firstRow(pageCount, currPageNum) {
    return pageCount * (currPageNum - 1) + 1;
}

function lastRow(firstRow, pageCount) {
    var lastRow = firstRow + pageCount;
    if (lastRow > numCount + 1) {
        lastRow = numCount + 1;
    }
    return lastRow;
}

function showCurrPage(currPageSpan,currPageNum) {
    currPageSpan.value = currPageNum;
}

function showTotalPage(pageNumSpan,pageNum) {
    pageNumSpan.innerHTML = pageNum;
}

//隐藏所有行
function hide(numCount, blockTable) {
    for (var i = 0; i < numCount; i++) {
        blockTable.rows[i].style.display = "none";
    }
}

//控制首页等功能的显示与不显示
function firstLink(numCount, columnsCounts, pageCount, pageNum, blockTable, preSpan, firstSpan, nextSpan, lastSpan, pageNumSpan, currPageSpan) {
    firstSpan.innerHTML = "<a href='javascript:firstPage(\""+numCount+"\",\""+columnsCounts+"\",\""+pageCount+"\",\""+pageNum+"\",\""+blockTable+"\",\""+preSpan+"\",\""+firstSpan+"\",\""+nextSpan+"\",\""+lastSpan+"\",\""+pageNumSpan+"\",\""+currPageSpan+"\");'>首页</a>";
}
function firstText(firstSpan) { firstSpan.innerHTML = "首页"; }

function preLink(currPageNum, numCount, columnsCounts, pageCount, pageNum, blockTable, preSpan, firstSpan, nextSpan, lastSpan, pageNumSpan, currPageSpan) {
    preSpan.innerHTML = "<a href='javascript:prePage(\""+currPageNum+"\"，\""+numCount+"\",\""+columnsCounts+"\",\""+pageCount+"\",\""+pageNum+"\",\""+blockTable+"\",\""+preSpan+"\",\""+firstSpan+"\",\""+nextSpan+"\",\""+lastSpan+"\",\""+pageNumSpan+"\",\""+currPageSpan+"\");'>上一页</a>";
}
function preText(preSpan) { preSpan.innerHTML = "上一页"; }

function nextLink(currPageNum, numCount, columnsCounts, pageCount, pageNum, blockTable, preSpan, firstSpan, nextSpan, lastSpan, pageNumSpan, currPageSpan) {
    nextSpan.innerHTML = "<a href='javascript:void(0);' onclick:'nextPage(["+currPageNum+"，"+numCount+","+columnsCounts+","+pageCount+","+pageNum+",\""+blockTable+"\",\""+preSpan+"\",\""+firstSpan+"\",\""+nextSpan+"\",\""+lastSpan+"\",\""+pageNumSpan+"\",\""+currPageSpan+"\"]);'>下一页</a>";
}
function nextText(nextSpan) { nextSpan.innerHTML = "下一页"; }

function lastLink(numCount, columnsCounts, pageCount, pageNum, blockTable, preSpan, firstSpan, nextSpan, lastSpan, pageNumSpan, currPageSpan) {
    lastSpan.innerHTML = "<a href='javascript:void(0);' onclick='lastPage("+numCount+","+columnsCounts+","+pageCount+","+pageNum+","+blockTable+","+preSpan+","+firstSpan+","+nextSpan+","+lastSpan+","+pageNumSpan+","+currPageSpan+");'>尾页</a>";
}
function lastText(lastSpan) { lastSpan.innerHTML = "尾页"; }

function pagin(table, spanPre, spanFirst, spanNext, spanLast, spanTotalPage, spanPageNum) {
    //全局变量
    var numCount;       //数据总数量
    var columnsCounts;  //数据列数量
    var pageCount;      //每页显示的数量
    var pageNum;        //总页数
    var blockTable
    var preSpan
    var firstSpan
    var nextSpan
    var lastSpan
    var pageNumSpan
    var currPageSpan
    //页面标签变量
    blockTable = document.getElementById(table);
    preSpan = document.getElementById(spanPre);
    firstSpan = document.getElementById(spanFirst);
    nextSpan = document.getElementById(spanNext);
    lastSpan = document.getElementById(spanLast);
    pageNumSpan = document.getElementById(spanTotalPage);
    currPageSpan = document.getElementById(spanPageNum);

    numCount = document.getElementById(table).rows.length;       //取table的行数作为数据总数量
    columnsCounts = blockTable.rows[0].cells.length;
    pageCount = 5;

    pageNum = parseInt(numCount / pageCount);
    if (0 != numCount % pageCount) {
        pageNum += 1;
    }
    firstPage(numCount, columnsCounts, pageCount, pageNum, blockTable, preSpan, firstSpan, nextSpan, lastSpan, pageNumSpan, currPageSpan);
}

/*function jump_to(num) {
    if (num > pageNum || num < 1) {
        showCurrPage(currPageNum);
        alert("页码输入错误");
        return false;
    }
    hide();
    var firstR = firstRow(num);
    var lastR = lastRow(firstR);
    for (i = firstR - 1; i < lastR - 1; i++) {
        blockTable.rows[i].style.display = "";
    }
    currPageNum = num;
    showCurrPage(currPageNum);
    if (num != 1) {
        firstLink(); preLink();
    }
    else {
        firstText(); preText();
    }
    if (num != pageNum) {
        nextLink();
        lastLink();
    }
    else {
        nextText();
        lastText();
    }

}*/