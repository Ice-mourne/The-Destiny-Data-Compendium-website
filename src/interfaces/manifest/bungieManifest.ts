export interface B_Manifest {
   DestinyBreakerTypeDefinition: { [key: string]: B_BreakerType }
   DestinyCollectibleDefinition: { [key: string]: B_Collectible }
   DestinyDamageTypeDefinition: { [key: string]: B_DamageType }
   DestinyInventoryBucketDefinition: { [key: string]: B_InventoryBucket }
   DestinyInventoryItemDefinition: { [key: string]: B_InventoryItem }
   DestinyMaterialRequirementSetDefinition: { [key: string]: B_MaterialRequirementSet }
   DestinyObjectiveDefinition: { [key: string]: B_Objective }
   DestinyPlugSetDefinition: { [key: string]: B_PlugSet }
   DestinyPowerCapDefinition: { [key: string]: B_PowerCap }
   DestinySocketCategoryDefinition: { [key: string]: B_SocketCategory }
   DestinySocketTypeDefinition: { [key: string]: B_SocketType }
   DestinyStatDefinition: { [key: string]: B_Stat }
   DestinyStatGroupDefinition: { [key: string]: B_StatGroup }
}

interface B_BreakerType {
   displayProperties: {
      description: string
      name: string
      icon: string
      hasIcon: boolean
   }
   enumValue: number
   unlockHash: number
   hash: number
   index: number
   redacted: boolean
   blacklisted: boolean
}

interface B_Collectible {
   displayProperties: {
      description: string
      name: string
      icon?: string
      hasIcon: boolean
      iconSequences?: Array<{
         frames: string[]
      }>
      highResIcon?: string
   }
   scope: number
   sourceString?: string
   sourceHash?: number
   itemHash: number
   acquisitionInfo?: {
      runOnlyAcquisitionRewardSite: boolean
      acquireMaterialRequirementHash?: number
   }
   stateInfo?: {
      requirements: {
         entitlementUnavailableMessage: string
      }
   }
   presentationNodeType: number
   traitIds?: any[]
   traitHashes?: any[]
   parentNodeHashes?: number[]
   hash: number
   index: number
   redacted: boolean
   blacklisted: boolean
}

interface B_DamageType {
   displayProperties: {
      description: string
      name: string
      hasIcon: boolean
      icon?: string
   }
   transparentIconPath?: string
   showIcon: boolean
   enumValue: number
   hash: number
   index: number
   redacted: boolean
   blacklisted: boolean
}

interface B_InventoryBucket {
   displayProperties: {
      description?: string
      name?: string
      hasIcon: boolean
   }
   scope: number
   category: number
   bucketOrder: number
   itemCount: number
   location: number
   hasTransferDestination: boolean
   enabled: boolean
   fifo: boolean
   hash: number
   index: number
   redacted: boolean
   blacklisted: boolean
}

//-------------------------------------------------- INVENTORY ITEM ----------------------------------------------------
export interface B_InventoryItem {
   displayProperties: {
      description: string
      name: string
      hasIcon: boolean
      icon?: string
      iconSequences?: Array<{
         frames: string[]
      }>
      highResIcon?: string
   }
   tooltipNotifications?: Array<{
      displayString: string
      displayStyle: string
   }>
   itemTypeDisplayName?: string
   flavorText?: string
   uiItemDisplayStyle?: string
   itemTypeAndTierDisplayName?: string
   displaySource?: string
   action?: {
      verbName: string
      verbDescription: string
      isPositive: boolean
      requiredCooldownSeconds: number
      requiredItems: Array<{
         count: number
         itemHash: number
         deleteOnAction: boolean
      }>
      progressionRewards: Array<{
         progressionMappingHash: number
         amount: number
         applyThrottles: boolean
      }>
      actionTypeLabel?: string
      rewardSheetHash: number
      rewardItemHash: number
      rewardSiteHash: number
      requiredCooldownHash: number
      deleteOnAction: boolean
      consumeEntireStack: boolean
      useOnAcquire: boolean
   }
   inventory: {
      maxStackSize: number
      bucketTypeHash: number
      recoveryBucketTypeHash: number
      tierTypeHash: number
      isInstanceItem: boolean
      nonTransferrableOriginal: boolean
      tierTypeName?: string
      tierType: number
      expirationTooltip?: string
      expiredInActivityMessage?: string
      expiredInOrbitMessage?: string
      suppressExpirationWhenObjectivesComplete: boolean
      stackUniqueLabel?: string
      recipeItemHash?: number
   }
   plug?: {
      insertionRules: Array<{
         failureMessage: string
      }>
      plugCategoryIdentifier: string
      plugCategoryHash: number
      onActionRecreateSelf: boolean
      actionRewardSiteHash: number
      actionRewardItemOverrideHash: number
      insertionMaterialRequirementHash: number
      previewItemOverrideHash: number
      enabledMaterialRequirementHash: number
      enabledRules: Array<{
         failureMessage: string
      }>
      uiPlugLabel: string
      plugStyle: number
      plugAvailability: number
      alternateUiPlugLabel: string
      alternatePlugStyle: number
      isDummyPlug: boolean
      applyStatsToSocketOwnerItem: boolean
      energyCost?: {
         energyCost: number
         energyTypeHash: number
         energyType: number
      }
      energyCapacity?: {
         capacityValue: number
         energyTypeHash: number
         energyType: number
      }
   }
   acquireRewardSiteHash: number
   acquireUnlockHash: number
   investmentStats?: Array<{
      statTypeHash: number
      value: number
      isConditionallyActive: boolean
   }>
   perks?: Array<{
      requirementDisplayString: string
      perkHash: number
      perkVisibility: number
   }>
   allowActions: boolean
   doesPostmasterPullHaveSideEffects: boolean
   nonTransferrable: boolean
   itemCategoryHashes?: number[]
   specialItemType: number
   itemType: number
   itemSubType: number
   classType: number
   breakerType: number
   equippable: boolean
   defaultDamageType: number
   isWrapper: boolean
   hash: number
   index: number
   redacted: boolean
   blacklisted: boolean
   backgroundColor?: {
      colorHash: number
      red: number
      green: number
      blue: number
      alpha: number
   }
   tooltipStyle?: string
   preview?: {
      screenStyle: string
      previewVendorHash: number
      previewActionString: string
      derivedItemCategories?: Array<{
         categoryDescription: string
         items: Array<{
            itemHash: number
            vendorItemIndex: number
         }>
         categoryIndex: number
      }>
      artifactHash?: number
   }
   screenshot?: string
   stats?: {
      disablePrimaryStatDisplay: boolean
      statGroupHash?: number
      stats: {
         [key: string]: B_InventoryItem_Stat
      }
      hasDisplayableStats: boolean
      primaryBaseStatHash: number
   }
   equippingBlock?: {
      uniqueLabelHash: number
      equipmentSlotTypeHash: number
      attributes: number
      equippingSoundHash: number
      hornSoundHash: number
      ammoType: number
      displayStrings: string[]
      uniqueLabel?: string
   }
   translationBlock?: {
      weaponPatternHash: number
      defaultDyes: Array<{
         channelHash: number
         dyeHash: number
      }>
      lockedDyes: Array<{
         channelHash: number
         dyeHash: number
      }>
      customDyes: Array<{
         channelHash: number
         dyeHash: number
      }>
      arrangements: Array<{
         classHash: number
         artArrangementHash: number
      }>
      hasGeometry: boolean
   }
   quality?: {
      itemLevels: any[]
      qualityLevel: number
      infusionCategoryName: string
      infusionCategoryHash: number
      infusionCategoryHashes: number[]
      progressionLevelRequirementHash: number
      currentVersion: number
      versions: Array<{
         powerCapHash: number
      }>
      displayVersionWatermarkIcons: string[]
   }
   sockets?: {
      detail: string
      socketEntries: Array<B_InvItem_SocketEntry>
      intrinsicSockets: Array<{
         plugItemHash: number
         socketTypeHash: number
         defaultVisible: boolean
      }>
      socketCategories: Array<{
         socketCategoryHash: number
         socketIndexes: number[]
      }>
   }
   talentGrid?: {
      talentGridHash: number
      itemDetailString: string
      hudDamageType: number
      buildName?: string
      hudIcon?: string
   }
   summaryItemHash?: number
   traitIds?: string[]
   traitHashes?: number[]
   secondaryIcon?: string
   collectibleHash?: number
   damageTypeHashes?: number[]
   damageTypes?: number[]
   defaultDamageTypeHash?: number
   iconWatermark?: string
   iconWatermarkShelved?: string
   loreHash?: number
   gearset?: {
      trackingValueMax: number
      itemList: number[]
   }
   objectives?: {
      objectiveHashes: number[]
      displayActivityHashes: number[]
      requireFullObjectiveCompletion: boolean
      questlineItemHash: number
      narrative: string
      objectiveVerbName: string
      questTypeIdentifier: string
      questTypeHash: number
      completionRewardSiteHash: number
      nextQuestStepRewardSiteHash: number
      timestampUnlockValueHash: number
      isGlobalObjectiveItem: boolean
      useOnObjectiveCompletion: boolean
      inhibitCompletionUnlockValueHash: number
      perObjectiveDisplayProperties: Array<{
         displayOnItemPreviewScreen: boolean
         activityHash?: number
      }>
      displayAsStatTracker: boolean
   }
   setData?: {
      itemList: Array<{
         trackingValue: number
         itemHash: number
      }>
      trackingUnlockValueHash: number
      abandonmentUnlockHash: number
      requireOrderedSetItemAdd: boolean
      setIsFeatured: boolean
      setType: string
      questLineName: string
      questLineDescription: string
      questStepSummary: string
   }
   value?: {
      itemValue: Array<{
         itemHash: number
         quantity: number
         hasConditionalVisibility: boolean
      }>
      valueDescription: string
   }
   secondaryOverlay?: string
   secondarySpecial?: string
   metrics?: {
      availableMetricCategoryNodeHashes: number[]
   }
   sack?: {
      detailAction: string
      openAction: string
      seedUnlockValueHash: number
      resolvedBitVectorUnlockValueHash: number
      resolvedItemCountUnlockValueHash: number
      selectItemCount: number
      rollStateUnlockValueHash: number
      rewardItemListHash: number
      openOnAcquire: boolean
      vendorSackType?: string
   }
   crafting?: {
      outputItemHash: number
      requiredSocketTypeHashes: number[]
      failedRequirementStrings: string[]
      bonusPlugs: Array<{
         socketTypeHash: number
         plugItemHash: number
      }>
   }
   summary?: {
      sortPriority: number
   }
   seasonHash?: number
   breakerTypeHash?: number
}

export interface B_InvItem_SocketEntry {
   socketTypeHash: number
   singleInitialItemHash: number
   reusablePlugItems: Array<{
      plugItemHash: number
   }>
   preventInitializationOnVendorPurchase: boolean
   preventInitializationWhenVersioning: boolean
   hidePerksInItemTooltip: boolean
   plugSources: number
   reusablePlugSetHash?: number
   overridesUiAppearance: boolean
   defaultVisible: boolean
   randomizedPlugSetHash?: number
}

export interface B_InventoryItem_Stat {
   statHash: number
   value: number
   minimum: number
   maximum: number
   displayMaximum?: number
}
//? ------------------------------------------------ INVENTORY ITEM ----------------------------------------------------
/*
//----------------------------------------------- INVENTORY ITEM ARMOR -------------------------------------------------
export interface B_InventoryItem_Armor extends B_InventoryItem {
   sockets: {
      socketEntries: BungieInventoryItemArmor_socketEntries[]
   }
}
export interface BungieInventoryItemArmor_socketEntries {
   socketTypeHash: number
   singleInitialItemHash: number
   reusablePlugItems: Array<{
      plugItemHash: number
   }>
   reusablePlugSetHash?: number
   defaultVisible: boolean
   randomizedPlugSetHash?: number
}

//----------------------------------------------- INVENTORY ITEM WEAPON ------------------------------------------------
export interface B_InventoryItem_Weapon extends B_InventoryItem {
   stats: {
      statGroupHash: number
      stats: {
         [key: string]: BungieInventoryItemWeapon_stats
      }
   }
   sockets: {
      socketEntries: BungieInventoryItemWeapon_socketEntries[]
   }
   defaultDamageTypeHash: number
}
export interface BungieInventoryItemWeapon_stats {
   statHash: number
   value: number
}
export interface BungieInventoryItemWeapon_socketEntries {
   socketTypeHash: number
   singleInitialItemHash: number
   reusablePlugItems: Array<{
      plugItemHash: number
   }>
   reusablePlugSetHash?: number
   defaultVisible: boolean
   randomizedPlugSetHash?: number
}

//----------------------------------------------------------------------------------------------------------------------
//? ----------------------------------------------- CONVERTED STUFF END ------------------------------------------------
*/

interface B_MaterialRequirementSet {
   materials: Array<{
      itemHash: number
      deleteOnAction: boolean
      count: number
      countIsConstant: boolean
      omitFromRequirements: boolean
   }>
   hash: number
   index: number
   redacted: boolean
   blacklisted: boolean
}

interface B_Objective {
   displayProperties: {
      description: string
      name: string
      hasIcon: boolean
      icon?: string
      iconSequences?: Array<{
         frames: string[]
      }>
   }
   unlockValueHash: number
   completionValue: number
   scope: number
   locationHash: number
   allowNegativeValue: boolean
   allowValueChangeWhenCompleted: boolean
   isCountingDownward: boolean
   valueStyle: number
   progressDescription: string
   perks: {
      perkHash: number
      style: number
   }
   stats: {
      style: number
   }
   minimumVisibilityThreshold: number
   allowOvercompletion: boolean
   showValueOnComplete: boolean
   isDisplayOnlyObjective: boolean
   completedValueStyle: number
   inProgressValueStyle: number
   uiLabel: string
   uiStyle: number
   hash: number
   index: number
   redacted: boolean
   blacklisted: boolean
}

interface B_PlugSet {
   reusablePlugItems?: Array<{
      weight: number
      alternateWeight: number
      currentlyCanRoll: boolean
      plugItemHash: number
      craftingRequirements?: {
         unlockRequirements: {
            failureDescription: string
         }
         materialRequirementHashes: number[]
         requiredLevel?: number
      }
   }>
   isFakePlugSet: boolean
   hash: number
   index: number
   redacted: boolean
   blacklisted: boolean
   displayProperties?: {
      description: string
      name: string
      hasIcon: boolean
      icon?: string
      highResIcon?: string
   }
}

interface B_PowerCap {
   powerCap: number
   hash: number
   index: number
   redacted: boolean
   blacklisted: boolean
}

interface B_SocketCategory {
   displayProperties: {
      description: string
      name: string
      hasIcon: boolean
   }
   uiCategoryStyle: number
   categoryStyle: number
   hash: number
   index: number
   redacted: boolean
   blacklisted: boolean
}

//--------------------------------------------------- SOCKET TYPE ------------------------------------------------------
interface B_SocketType {
   displayProperties: {
      description: string
      name: string
      hasIcon: boolean
   }
   insertAction: {
      actionExecuteSeconds: number
      actionSoundHash: number
      isPositiveAction: boolean
      actionType: number
   }
   plugWhitelist: Array<B_SocketType_PlugWhitelist>
   socketCategoryHash: number
   visibility: number
   alwaysRandomizeSockets: boolean
   isPreviewEnabled: boolean
   hideDuplicateReusablePlugs: boolean
   overridesUiAppearance: boolean
   avoidDuplicatesOnInitialization: boolean
   currencyScalars: Array<{
      currencyItemHash: number
      scalarValue: number
   }>
   hash: number
   index: number
   redacted: boolean
   blacklisted: boolean
}
export interface B_SocketType_PlugWhitelist {
   categoryHash: number
   categoryIdentifier: string
   reinitializationPossiblePlugHashes?: number[]
}
//? ------------------------------------------------- SOCKET TYPE ------------------------------------------------------

export interface B_Stat {
   displayProperties: {
      description: string
      name: string
      icon?: string
      iconSequences?: Array<{
         frames: string[]
      }>
      hasIcon: boolean
   }
   aggregationType: number
   hasComputedBlock: boolean
   statCategory: number
   interpolate: boolean
   hash: number
   index: number
   redacted: boolean
   blacklisted: boolean
}

export interface B_StatGroup {
   maximumValue: number
   uiPosition: number
   scaledStats: Array<{
      statHash: number
      maximumValue: number
      displayAsNumeric: boolean
      displayInterpolation: Array<{
         value: number
         weight: number
      }>
   }>
   overrides: object
   hash: number
   index: number
   redacted: boolean
   blacklisted: boolean
}

//----------------------------------------------------------------------------------------------------------------------

export interface B_ManifestInfo {
   Response: {
      version: string
      mobileAssetContentPath: string
      mobileGearAssetDataBases: Array<{
         version: number
         path: string
      }>
      mobileWorldContentPaths: {
         'en': string
         'fr': string
         'es': string
         'es-mx': string
         'de': string
         'it': string
         'ja': string
         'pt-br': string
         'ru': string
         'pl': string
         'ko': string
         'zh-cht': string
         'zh-chs': string
      }
      jsonWorldContentPaths: {
         'en': string
         'fr': string
         'es': string
         'es-mx': string
         'de': string
         'it': string
         'ja': string
         'pt-br': string
         'ru': string
         'pl': string
         'ko': string
         'zh-cht': string
         'zh-chs': string
      }
      jsonWorldComponentContentPaths: {
         'en': { [key: string]: string }
         'fr': { [key: string]: string }
         'es': { [key: string]: string }
         'es-mx': { [key: string]: string }
         'de': { [key: string]: string }
         'it': { [key: string]: string }
         'ja': { [key: string]: string }
         'pt-br': { [key: string]: string }
         'ru': { [key: string]: string }
         'pl': { [key: string]: string }
         'ko': { [key: string]: string }
         'zh-cht': { [key: string]: string }
         'zh-chs': { [key: string]: string }
      }
      mobileClanBannerDatabasePath: string
      mobileGearCDN: {
         Geometry: string
         Texture: string
         PlateRegion: string
         Gear: string
         Shader: string
      }
      iconImagePyramidInfo: unknown[]
   }
   ErrorCode: number
   ThrottleSeconds: number
   ErrorStatus: string
   Message: string
   MessageData: object
}
