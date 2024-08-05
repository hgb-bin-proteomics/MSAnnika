# History

## MS Annika 3.0 v3.0.2

- Release date: 18. June 2024
- Supported Proteome Discoverer versions: 3.1
- Changes:
  - Major:
    - New search algorithm to support non-cleavable crosslinkers
  - Minor:
    - Accessions and positions of decoy peptides are now also reported
    - Support for validation with [xiFDR](https://www.rappsilberlab.org/software/xifdr/) using the [xiFDR exporter](https://github.com/hgb-bin-proteomics/MSAnnika_exporters)

## MS Annika 2.0 v2.2.2

- Release date: 17. October 2023
- Supported Proteome Discoverer versions: 3.1
- Changes:
  - Minor:
    - Upgrade MS Annika to Net7.0
    - Add a "Connected MS3 Scans" column to the CSM result table
    - Add a warning message in the MS3 search if "Use MS1 Precursor" is used
  - Bugfixes:
    - Fixed a bug that prevented running MS Annika in Proteome Discoverer 3.1
    - Fixed a bug in relation to running MS Annika in combination with MS Amanda

## MS Annika 2.0 v2.2.1

- Release date: 18. September 2023
- Supported Proteome Discoverer versions: 3.1.0.395
- Changes:
  - Minor:
    - Added a retention time window parameter for MS3 search
    - Added the number of found doublets to the CSM result table
    - Changed the default values of several parameters to better reflect current cross-linking workflows
    - Added a charge determination algorithm for calculating missing fragment ion charge states
  - Bugfixes:
    - Fixed a bug in relation to N-terminal protein modifications in the internal MS Amanda version
    - Fixed a bug that prevented reading of MGF and timsTOF files
    - Fixed a bug that prevented associating MSn scans with peptide hits and therefore led to improper usage of the MS3 rescoring function and spectrum display in Proteome Discoverer
- Additional notes: This version of MS Annika 2.0 only works for Proteome Discoverer 3.1.0.395. The current release version of Proteome Discover (3.1.0.638) requires MS Annika 2.0 v2.2.2!

## MS Annika 2.0 v1.2.0

- Release date: 12. May 2023
- Supported Proteome Discoverer versions: 3.1.0.395
- Changes:
  - Major:
    - Upgrade MS Annika to Net6.0
    - Upgrade internal MS Amanda version to 3.0.20.953
  - Minor:
    - Several changes to support Proteome Discoverer version 3.1 and the new MS Amanda engine
  - Bugfixes:
    - Introduced a consistency check for decoy protein order that should prevent debug prompts for "not all accessions found in target and decoy files"
- Additional notes: This version of MS Annika 2.0 only works for Proteome Discoverer 3.1.0.395. The current release version of Proteome Discover (3.1.0.638) requires MS Annika 2.0 v2.2.2!

## MS Annika 2.0 v1.1.4fix

- Release date: 11. September 2023
- Supported Proteome Discoverer versions: 3.0
- Changes:
  - Bugfixes:
    - Fixed a bug that prevented reading of MGF files
    - Fixed a bug that prevented processing of MGF files due to missing fragment ion charge states
- Additional notes: This is a bugfix release for MS Annika 2.0 for Proteome Discoverer 3.0, these fixes are not included in MS Annika 2.0 v1.2.0 but will be included in MS Annika 2.0 v2.2.1 (Proteome Discoverer 3.1).

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
