package scavenge_test

import (
	"testing"

	keepertest "github.com/devdaljeet/scavenge/testutil/keeper"
	"github.com/devdaljeet/scavenge/testutil/nullify"
	"github.com/devdaljeet/scavenge/x/scavenge"
	"github.com/devdaljeet/scavenge/x/scavenge/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		ScavengeList: []types.Scavenge{
			{
				Index: "0",
			},
			{
				Index: "1",
			},
		},
		CommitList: []types.Commit{
			{
				Index: "0",
			},
			{
				Index: "1",
			},
		},
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.ScavengeKeeper(t)
	scavenge.InitGenesis(ctx, *k, genesisState)
	got := scavenge.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.ScavengeList, got.ScavengeList)
	require.ElementsMatch(t, genesisState.CommitList, got.CommitList)
	// this line is used by starport scaffolding # genesis/test/assert
}
