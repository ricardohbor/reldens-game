/**
 *
 * Reldens - Translations - zh_CN
 *
 */

module.exports =     {
        items: {
            undefinedItem: '添加物品出错，物品未定义。',
            undefinedMethodInventoryId: '添加物品出错，无法获取库存 ID。',
            undefinedItemKey: '添加物品出错，物品键未定义。',
            invalidItemInstance: '物品实例无效。',
            lockedForAddItem: '背包已锁定，无法添加物品：%itemUid',
            maxTotalReachedForAddItem: '无法添加物品，已达最大数量。',
            itemExistsForAddItem: '无法添加物品，物品已存在：%itemUid',
            itemLimitExceededForAddItem: '无法添加物品，物品数量已达上限。',
            addItemsError: '无法添加物品 "%itemUid"。',
            lockedForSetItem: '背包已锁定，无法设置物品：%itemUid。',
            lockedForRemoveItem: '背包已锁定，无法移除物品：%itemUid。',
            keyNotFound: '无法移除物品，未找到键：%itemUid。',
            lockedForModifyItemQty: '背包已锁定，无法修改物品数量：%itemUid。',
            undefinedItemKeyForOperation: '无法"%operation"物品数量，物品键未定义：%itemUid。',
            qtyNotANumber: '无法"%operation"物品数量，数量不是数字：%qty。',
            itemQtyLimitExceeded: '无法"%operation"物品数量，数量超出上限：%qty > %limitPerItem。',
            lockedForSetItems: '背包已锁定，无法设置物品。',
            tradeWith: '正在与 %playerName 交易',
            trade: {
                actions: {
                    confirm: '确认',
                    disconfirm: '拒绝',
                    cancel: '取消'
                }
            },
            exchange: {
                missingConfirmation: '缺少确认。',
                invalidPushedQuantity: '物品推送数量无效（%qty），可用：%pushedItemQty。',
                invalidQuantity: '物品数量无效为 0。',
                invalidExchange: '"FROM" 与 "TO" 背包相同，交换已取消。',
                decreaseQuantity: '交换背包扣减出错。',
                itemAdd: '交换背包添加结果出错。'
            },
            requirements: {
                itemNotPresent: '缺少所需物品 "%requiredItemKey"。',
                quantityNotAvailable: '所需物品 "%requiredItemKey" 的数量 %totalRequiredQuantity 不足。',
                itemNotPushed: '所需物品 "%requiredItemKey" 未推送到交换。',
                itemQuantityNotPushed: '所需物品 "%requiredItemKey" 的数量 %totalRequiredQuantity 未推送到交换。',
                itemDoesNotExists: '需求错误，物品 "%itemUid" 不在背包中。',
                itemAdd: '需求添加物品出错。'
            },
            reward: {
                doesNotExists: '奖励错误，物品 "%itemUid" 不存在。',
                missingItem: '奖励错误，物品 "%itemUid" 不存在。',
                itemNotPresent: '奖励物品 "%rewardItemKey" 不在背包中。',
                quantityNotAvailable: '奖励物品 %rewardItemKey 的奖励数量（%rewardQuantity）不足。',
                missingPushed: '缺少推送到交换的物品 "%itemUid"。',
                getItemDoesNotExists: '奖励错误，物品 "%itemUid" 不在背包中。',
                processItem: '处理物品奖励出错，物品 "%itemUid"。',
                processInventory: '处理奖励背包出错。',
                addItems: '添加奖励物品出错：%itemsKeys。',
                quantityOverload: '奖励数量（%rewardQuantityTotal）超过背包可用数量（%rewardInventoryItemQty）。'
            },
            equipment: {
                modifiersApply: '无法应用修饰，物品未装备：%itemUid',
                modifiersRevert: '无法还原修饰，物品未装备：%itemUid'
            }
        }
    };
