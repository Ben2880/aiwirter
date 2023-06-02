document.getElementById('A-create').addEventListener('click', function() {
    // 删除了原来的输入提示，直接使用默认的标签名称
    var tag = document.createElement('span');
    tag.textContent = "Book"; // 默认的一级标签名称
    tag.style.display = "inline-block";
    tag.style.height = "32px";
    tag.style.textAlign = "center";
    tag.style.lineHeight = "32px";
    tag.addEventListener('dblclick', function() {
        var newTagName = prompt("请输入新的一级标签名称");
        if (newTagName) {
            this.textContent = newTagName;
        }
    });
    document.getElementById('A-tags').appendChild(tag);
});

document.getElementById('B-create').addEventListener('click', function() {
    // 删除了原来的输入提示，直接使用默认的标签名称
    var tag = document.createElement('span');
    tag.textContent = "新标签"; // 默认的二级自定义标签名称
    tag.style.display = "inline-block";
    tag.style.height = "32px";
    tag.style.textAlign = "center";
    tag.style.lineHeight = "32px";
    tag.addEventListener('dblclick', function() {
        var newTagName = prompt("请输入新的二级自定义标签名称");
        if (newTagName) {
            this.textContent = newTagName;
        }
    });
    document.getElementById('B-tags').appendChild(tag);
});

document.getElementById('B-create-2').addEventListener('click', function() {
    // 删除了原来的输入提示，直接使用默认的标签名称
    var tag = document.createElement('span');
    var chapterCount = document.getElementById('chapter-count').value;
    tag.textContent = "第" + (parseInt(chapterCount) + 1) + "章"; // 默认的三级标签名称
    tag.style.display = "inline-block";
    tag.style.height = "32px";
    tag.style.textAlign = "center";
    tag.style.lineHeight = "32px";
    tag.addEventListener('dblclick', function() {
        var newTagName = prompt("请输入新的三级标签名称");
        if (newTagName) {
            this.textContent = newTagName;
        }
    });
    document.getElementById('B-chapters').appendChild(tag);
    document.getElementById('chapter-count').value = parseInt(chapterCount) + 1; // 更新下划线上的数值
});


document.getElementById('chapter-count').addEventListener('input', function() {
    var chapterCount = parseInt(this.value);
    var currentChapterCount = document.getElementById('B-chapters').children.length;
    if (chapterCount >= currentChapterCount) {
        for (var i = currentChapterCount; i < chapterCount; i++) {
            var tag = document.createElement('span');
            tag.textContent = "第" + (i + 1) + "章";
            tag.style.textAlign = "center";
            tag.style.lineHeight = "32px";
            tag.addEventListener('dblclick', function() {
                var newTagName = prompt("请输入新的三级标签名称");
                if (newTagName) {
                    this.textContent = newTagName;
                }
            });
            document.getElementById('B-chapters').appendChild(tag);
        }
    } else {
        alert("输入无效，输入的数值应大于等于已经存在的三级标签总数");
    }
});


document.getElementById('B-tags').addEventListener('click', function() {
    // Clear C area
    document.getElementById('C').innerHTML = '';
    // Create a text area
    var textArea = document.createElement('textarea');
    textArea.style.width = '100%';
    textArea.style.height = '100%';
    document.getElementById('C').appendChild(textArea);
});

document.getElementById('B-chapters').addEventListener('click', function() {
    // Clear C area
    document.getElementById('C').innerHTML = '';
    // Create a div for tabs
    var tabContainer = document.createElement('div');
    tabContainer.style.display = 'flex';
    tabContainer.style.width = '100%';
    tabContainer.style.height = '24px';
    document.getElementById('C').appendChild(tabContainer);
    // Create a div for text areas
    var textAreaContainer = document.createElement('div');
    textAreaContainer.style.width = '100%';
    textAreaContainer.style.height = 'calc(100% - 24px)';
    document.getElementById('C').appendChild(textAreaContainer);
    // Create tabs and text areas
    var tabs = ['characters', 'background', 'structure', 'Conflict', 'theme', 'text'];
    tabs.forEach(function(tabName, index) {
        var tab = document.createElement('div');
        tab.textContent = tabName;
        tab.style.border = '1px solid black';
        tab.style.textAlign = 'center';
        tab.style.flexGrow = '1';
        tab.addEventListener('dblclick', function() {
            var newTabName = prompt("请输入新的选项卡名称");
            if (newTabName) {
                this.textContent = newTabName;
            }
        });
        tab.addEventListener('click', function() {
            // Hide all text areas
            for (var i = 0; i < textAreaContainer.children.length; i++) {
                textAreaContainer.children[i].style.display = 'none';
            }
            // Show the text area corresponding to the clicked tab
            textAreaContainer.children[index].style.display = 'block';
        });
        tabContainer.appendChild(tab);
        // Create a text area for each tab
        var textArea = document.createElement('textarea');
        textArea.style.width = '100%';
        textArea.style.height = '100%';
        textArea.style.display = 'none'; // Hide the text area initially
        textAreaContainer.appendChild(textArea);
    });
    // Show the first text area initially
    if (textAreaContainer.children.length > 0) {
        textAreaContainer.children[0].style.display = 'block';
    }
});


document.getElementById('chat-input').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        // Trigger send message operation
    }
});

function displayChatbotReply(message) {
    var chatContent = document.getElementById('chat-content');
    var messageElement = document.createElement('p');
    messageElement.textContent = message;
    chatContent.appendChild(messageElement);
}
