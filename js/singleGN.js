var orderTableBody = document.getElementById('orderTableBody');
        var rowTotalArray = [];
        var currentVideo = null; // 新增：用于跟踪当前播放的视频

        products.forEach(function (product) {
            var row = document.createElement('tr');

            // // 商品图片
            // var imageCell = document.createElement('td');
            // var image = document.createElement('img');
            // image.src = product.image;
            // image.alt = 'Product Image';
            // image.className = 'product-image';
            // imageCell.appendChild(image);
            // row.appendChild(imageCell);

            // // 商品视频
            // var videoCell = document.createElement('td');
            // var video = document.createElement('video');
            // video.src = product.video;
            // video.controls = false;
            // video.className = 'videoStart';
            // video.poster = './images/MoRen.jpg';
            // video.addEventListener('click', function () {
            //     openModal(product.video);
            // });
            // videoCell.appendChild(video);
            // row.appendChild(videoCell);

            // 商品名称
            var shopName = document.createElement('td');
            shopName.textContent = product.name;
            row.appendChild(shopName);

            // 商品价格
            var priceCell = document.createElement('td');
            priceCell.textContent = product.price + ' 元';
            row.appendChild(priceCell);

            // 商品数量
            var quantityCell = document.createElement('td');
            var quantityInput = document.createElement('input');
            quantityInput.type = 'text';
            quantityInput.value = 0;
            quantityInput.readOnly = true;

            // 减少数量按钮
            var decreaseButton = document.createElement('button');
            decreaseButton.textContent = '-';
            decreaseButton.addEventListener('click', function () {
                var currentValue = parseInt(quantityInput.value);
                if (currentValue > 0) {
                    quantityInput.value = currentValue - 1;
                    updateTotal();
                }
            });
            quantityCell.appendChild(decreaseButton);

            // 在两个按钮之间插入原始商品数量
            quantityCell.appendChild(quantityInput);

            // 增加数量按钮
            var increaseButton = document.createElement('button');
            increaseButton.textContent = '+';
            increaseButton.addEventListener('click', function () {
                var currentValue = parseInt(quantityInput.value);
                quantityInput.value = currentValue + 1;
                updateTotal();
            });
            quantityCell.appendChild(increaseButton);

            row.appendChild(quantityCell);

            // 商品总价
            var totalCell = document.createElement('td');
            totalCell.textContent = 0 + ' 元';
            row.appendChild(totalCell);
            rowTotalArray.push(totalCell);

            // 将行添加到表格体
            orderTableBody.appendChild(row);

            // 更新总价
            function updateTotal() {
                var quantity = parseInt(quantityInput.value);
                var total = product.price * quantity;
                totalCell.textContent = total + ' 元';

                // 计算总和
                var totalSum = rowTotalArray.reduce(function (acc, cell) {
                    return acc + parseFloat(cell.textContent);
                }, 0);

                // 显示总和在页面上
                document.getElementById('totalSum').textContent = "总计：" + totalSum + ' 元';
            }

            // 打开模态框
            function openModal(videoSrc) {
                var modal = document.getElementById('myModal');
                var modalContent = document.getElementById('modalContent');
                modalContent.src = videoSrc;
                modal.style.display = 'block';

                // 暂停之前的视频播放
                pauseCurrentVideo();

                // 设置当前播放的视频
                currentVideo = modalContent;
            }

            // 暂停当前视频播放
            function pauseCurrentVideo() {
                if (currentVideo) {
                    currentVideo.pause();
                }
            }
        });

        // 关闭模态框
        
    function closeModal() {
    var modal = document.getElementById('myModal');
    var modalContent = document.getElementById('modalContent');
    modalContent.pause(); // 暂停视频
    modal.style.display = 'none';
    }
