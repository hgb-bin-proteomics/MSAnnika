# History

## MS Annika 2.0 v1.1.4

- Release date: 11. April 2023
- Supported Proteome Discoverer versions: 3.0
- Changes:
  - Bugfixes:
    - Fixed a bug that displayed the wrong charges for cross-linked peptides in the CSM result table 

## MS Annika 2.0 v1.1.3

- Release date: 21. February 2023
- Supported Proteome Discoverer versions: 2.5, 3.0
- Changes:
  - Minor:
    - Added 3 new columns in CSM result table: Activation Type (of the MS2), NCE [%] (of the MS2), Stepped Collision Energies (of the MS2)

## MS Annika 2.0 v1.1.2

- Release date: 09. February 2023
- Supported Proteome Discoverer versions: 2.5, 3.0
- Changes:
  - Minor:
    - Changed Crosslink Modification Addition parameter to Additional Crosslink Doublet Distances

## MS Annika 2.0 v1.1.1

- Release date: 29. November 2022
- Supported Proteome Discoverer versions: 2.5, 3.0
- Changes:
  - Minor:
    - MS Annika now properly reads and accounts for crosslinker specific neutral losses defined in the crosslinker modification
    - Added a new column in the CSM result table: Compensation Voltage

## MS Annika 2.0 v1.1.0

- Release date: 11. November 2022
- Supported Proteome Discoverer versions: 2.5
- Changes:
  - Major:
    - Full support for MS2-MS3-based cross-linking workflows
  - Minor:
    - Added a new column in the PSM result table: Annika PSM Score (PSM score for PSMs originating from MS Annika)
    - Support for quantification with [apQuant](https://ms.imp.ac.at/index.php?action=apQuant)
  - Bugfixes:
    - Fixed a bug where CSMs that switched alpha- and beta-peptide were not grouped together
    - Fixed a bug that prevented the usage of grouping nodes in consensus worklfows

## MS Annika v1.0.0

- Release date: 21. February 2021
- Supported Proteome Discoverer versions: 2.3, 2.4, 2.5
- Initial release of MS Annika as described in [here](https://doi.org/10.1021/acs.jproteome.0c01000)
